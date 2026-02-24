let horariosGuardados = JSON.parse(localStorage.getItem('horariosGuardados')) || [];
let cursosSeleccionados = [];
const diasSemana = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];
const horas = ['08:00', '08:50', '09:40', '10:30', '11:20', '12:10', '13:00', '13:50', '14:40', '15:30', '16:20', '17:10', '18:00', '18:50', '19:40', '20:30', '21:20', '22:10'];

// Inicializar app
document.addEventListener('DOMContentLoaded', function() {
    cargarCursos();
    generarGrid();
    mostrarHorariosGuardados();
});

// Cargar lista de cursos
function cargarCursos() {
    const cursosList = document.getElementById('cursosList');
    cursosList.innerHTML = '';
    
    cursos.forEach((curso, idx) => {
        const div = document.createElement('div');
        div.className = 'curso-item';
        div.innerHTML = `
            <div class="curso-nombre">${curso.nombre}</div>
            <div class="curso-info">📚 ${curso.codigo} - ${curso.ciclo}</div>
            <div class="curso-info">👨‍🏫 ${curso.docente.substring(0, 20)}...</div>
            <div class="curso-info">🏫 ${curso.aula}</div>
        `;
        div.onclick = () => seleccionarCurso(idx);
        cursosList.appendChild(div);
    });
}

// Seleccionar un curso
function seleccionarCurso(idx) {
    const curso = cursos[idx];
    
    // Verificar conflictos
    let tieneConflicto = false;
    for (let c of cursosSeleccionados) {
        if (verificarConflicto(c, curso)) {
            alert('⚠️ Este curso tiene conflicto de horario!');
            tieneConflicto = true;
            break;
        }
    }
    
    if (!tieneConflicto) {
        cursosSeleccionados.push(curso);
        actualizarVistas();
    }
}

// Verificar si hay conflicto de horarios
function verificarConflicto(curso1, curso2) {
    for (let h1 of curso1.horarios) {
        for (let h2 of curso2.horarios) {
            if (h1.dia === h2.dia) {
                const inicio1 = parseInt(h1.inicio.replace(':', ''));
                const fin1 = parseInt(h1.fin.replace(':', ''));
                const inicio2 = parseInt(h2.inicio.replace(':', ''));
                const fin2 = parseInt(h2.fin.replace(':', ''));
                
                if ((inicio1 < fin2 && fin1 > inicio2)) {
                    return true;
                }
            }
        }
    }
    return false;
}

// Generar grid de horario
function generarGrid() {
    const grid = document.getElementById('horarioGrid');
    let html = '<table class="grid-table"><tr><th>HORA</th>';
    
    // Encabezados de días
    diasSemana.forEach(dia => {
        html += `<th>${dia}</th>`;
    });
    html += '</tr>';
    
    // Filas de horas
    horas.forEach(hora => {
        html += `<tr><td class="time-cell">${hora}</td>`;
        diasSemana.forEach(dia => {
            html += `<td id="cell-${dia}-${hora}"></td>`;
        });
        html += '</tr>';
    });
    
    html += '</table>';
    grid.innerHTML = html;
}

// Actualizar vistas
function actualizarVistas() {
    // Limpiar grid
    horas.forEach(hora => {
        diasSemana.forEach(dia => {
            document.getElementById(`cell-${dia}-${hora}`).innerHTML = '';
        });
    });
    
    // Llenar grid con cursos seleccionados
    cursosSeleccionados.forEach((curso, idx) => {
        curso.horarios.forEach(horario => {
            const cell = document.getElementById(`cell-${horario.dia}-${horario.inicio}`);
            if (cell) {
                const span = document.createElement('div');
                span.className = 'course-cell';
                span.innerHTML = `${curso.codigo}`;
                span.onclick = (e) => {
                    e.stopPropagation();
                    removerCurso(idx);
                };
                span.title = curso.nombre;
                cell.appendChild(span);
            }
        });
    });
    
    // Actualizar cursos seleccionados
    const selectedDiv = document.getElementById('selectedCourses');
    if (cursosSeleccionados.length === 0) {
        selectedDiv.innerHTML = 'Aún no has seleccionado ningún curso';
    } else {
        selectedDiv.innerHTML = '';
        cursosSeleccionados.forEach((curso, idx) => {
            const card = document.createElement('div');
            card.className = 'course-card';
            card.innerHTML = `
                <button class="btn-remove" onclick="removerCurso(${idx})">✕</button>
                <h4>${curso.nombre}</h4>
                <p><strong>${curso.codigo}</strong></p>
                <p>👨‍🏫 ${curso.docente}</p>
                <p>🏫 ${curso.aula}</p>
                <p>${curso.horarios.map(h => `${h.dia} ${h.inicio}-${h.fin}`).join(' | ')}</p>
            `;
            selectedDiv.appendChild(card);
        });
    }
}

// Remover curso
function removerCurso(idx) {
    cursosSeleccionados.splice(idx, 1);
    actualizarVistas();
}

// Buscar cursos
function buscarCursos() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const items = document.querySelectorAll('.curso-item');
    
    items.forEach(item => {
        if (item.textContent.toLowerCase().includes(input)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// Filtrar por ciclo
function filtrarPorCiclo() {
    const ciclo = document.getElementById('cicloFilter').value;
    const items = document.querySelectorAll('.curso-item');
    
    items.forEach((item, idx) => {
        if (ciclo === '' || cursos[idx].ciclo === ciclo) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// Guardar horario
function guardarHorario() {
    const nombre = prompt('Nombre del horario:');
    if (nombre) {
        horariosGuardados.push({
            nombre: nombre,
            cursos: JSON.parse(JSON.stringify(cursosSeleccionados)),
            fecha: new Date().toLocaleDateString()
        });
        localStorage.setItem('horariosGuardados', JSON.stringify(horariosGuardados));
        mostrarHorariosGuardados();
        alert('✅ Horario guardado!');
    }
}

// Mostrar horarios guardados
function mostrarHorariosGuardados() {
    const div = document.getElementById('savedSchedules');
    if (horariosGuardados.length === 0) {
        div.innerHTML = 'Aún no has guardado ningún horario';
    } else {
        div.innerHTML = '';
        horariosGuardados.forEach((h, idx) => {
            const card = document.createElement('div');
            card.className = 'course-card';
            card.innerHTML = `
                <h4>${h.nombre}</h4>
                <p>📅 ${h.fecha}</p>
                <p>${h.cursos.length} cursos</p>
                <button class="btn-load" onclick="cargarHorario(${idx})">Cargar</button>
                <button class="btn-delete" onclick="borrarHorario(${idx})">Eliminar</button>
            `;
            div.appendChild(card);
        });
    }
}

// Cargar horario guardado
function cargarHorario(idx) {
    cursosSeleccionados = JSON.parse(JSON.stringify(horariosGuardados[idx].cursos));
    actualizarVistas();
    alert('✅ Horario cargado!');
}

// Borrar horario
function borrarHorario(idx) {
    if (confirm('¿Estás seguro?')) {
        horariosGuardados.splice(idx, 1);
        localStorage.setItem('horariosGuardados', JSON.stringify(horariosGuardados));
        mostrarHorariosGuardados();
    }
}

// Limpiar horario actual
function limpiarHorario() {
    if (confirm('¿Limpiar todo el horario?')) {
        cursosSeleccionados = [];
        actualizarVistas();
    }
}

// Exportar a PDF
function exportarPDF() {
    const element = document.querySelector('.horario-grid');
    const opt = {
        margin: 10,
        filename: 'horario_2026.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { orientation: 'landscape', unit: 'mm', format: 'a4' }
    };
    html2pdf().set(opt).from(element).save();
}

// Exportar a Imagen
function exportarImagen() {
    const element = document.querySelector('.horario-grid');
    html2canvas(element).then(canvas => {
        const link = document.createElement('a');
        link.href = canvas.toDataURL();
        link.download = 'horario_2026.png';
        link.click();
    });
}
