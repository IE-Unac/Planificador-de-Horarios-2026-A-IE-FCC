let cursosSeleccionados = [];
let horariosGuardados = JSON.parse(localStorage.getItem('horariosGuardados')) || [];
const diasSemana = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];
const horas = ['08:00', '08:50', '09:40', '10:30', '11:20', '12:10', '13:00', '13:50', '14:40', '15:30', '16:20', '17:10', '18:00', '18:50', '19:40', '20:30', '21:20', '22:10'];

document.addEventListener('DOMContentLoaded', function() {
    cargarCiclos();
    generarGridHorario();
});

// ===== CARGAR CICLOS =====
function cargarCiclos() {
    const container = document.getElementById('ciclosContainer');
    container.innerHTML = '';
    
    const ciclosUnicos = [...new Set(cursos.map(c => c.ciclo))];
    
    ciclosUnicos.forEach(ciclo => {
        const cursosDelCiclo = cursos.filter(c => c.ciclo === ciclo);
        
        const cicloDiv = document.createElement('div');
        cicloDiv.className = 'ciclo-item';
        
        let html = `
            <div class="ciclo-header" onclick="toggleCiclo(this)">
                <span>CICLO ${ciclo}</span>
                <span class="ciclo-icon">▼</span>
            </div>
            <div class="ciclo-content">
                <div class="cursos-en-ciclo">
        `;
        
        cursosDelCiclo.forEach((curso, idx) => {
            const idCurso = `curso-${ciclo}-${idx}`;
            html += `
                <div class="curso-en-ciclo">
                    <div class="curso-header-ciclo">
                        <input type="radio" id="${idCurso}" name="curso-${ciclo}" value="${ciclo}-${idx}">
                        <div class="curso-info-ciclo">
                            <div class="curso-nombre-ciclo">${curso.nombre}</div>
                            <div class="curso-codigo-ciclo">CÓDIGO: ${curso.codigo}</div>
                        </div>
                    </div>
                    <div class="secciones-curso">
            `;
            
            curso.secciones.forEach((seccion, sidx) => {
                const idSeccion = `seccion-${ciclo}-${idx}-${sidx}`;
                const horariosText = seccion.horarios.map(h => `${h.dia} ${h.inicio}-${h.fin}`).join(', ');
                
                html += `
                    <div class="seccion-item">
                        <label class="seccion-label">
                            <input type="radio" id="${idSeccion}" name="seccion-${ciclo}-${idx}" value="${ciclo}-${idx}-${sidx}" onchange="seleccionarSeccion(${JSON.stringify(curso).replaceAll('"', '&quot;')}, ${JSON.stringify(seccion).replaceAll('"', '&quot;')})">
                            <div>
                                <div class="seccion-docente">${seccion.docente}</div>
                                <div class="seccion-horarios">${horariosText}</div>
                                <div class="seccion-aula">🏫 ${seccion.aula}</div>
                            </div>
                        </label>
                    </div>
                `;
            });
            
            html += `
                    </div>
                </div>
            `;
        });
        
        html += `
                </div>
            </div>
        `;
        
        cicloDiv.innerHTML = html;
        container.appendChild(cicloDiv);
    });
}

// ===== TOGGLE CICLO =====
function toggleCiclo(element) {
    const cicloItem = element.parentElement;
    cicloItem.classList.toggle('expanded');
}

// ===== SELECCIONAR SECCIÓN =====
function seleccionarSeccion(curso, seccion) {
    // Verificar conflictos
    let tieneConflicto = false;
    
    for (let c of cursosSeleccionados) {
        if (verificarConflicto(c.seccion, seccion)) {
            alert('⚠️ ¡CONFLICTO DE HORARIO! Este curso se cruza con otro seleccionado.');
            tieneConflicto = true;
            break;
        }
    }
    
    if (!tieneConflicto) {
        // Remover si ya existe el mismo curso
        cursosSeleccionados = cursosSeleccionados.filter(c => c.codigo !== curso.codigo);
        
        // Agregar nuevo
        cursosSeleccionados.push({
            nombre: curso.nombre,
            codigo: curso.codigo,
            ciclo: curso.ciclo,
            seccion: seccion
        });
        
        actualizarVistas();
    }
}

// ===== VERIFICAR CONFLICTOS =====
function verificarConflicto(sec1, sec2) {
    for (let h1 of sec1.horarios) {
        for (let h2 of sec2.horarios) {
            if (h1.dia === h2.dia) {
                const inicio1 = horaAMinutos(h1.inicio);
                const fin1 = horaAMinutos(h1.fin);
                const inicio2 = horaAMinutos(h2.inicio);
                const fin2 = horaAMinutos(h2.fin);
                
                if ((inicio1 < fin2 && fin1 > inicio2)) {
                    return true;
                }
            }
        }
    }
    return false;
}

function horaAMinutos(hora) {
    const [h, m] = hora.split(':');
    return parseInt(h) * 60 + parseInt(m);
}

// ===== GENERAR GRID =====
function generarGridHorario() {
    const grid = document.getElementById('horarioGrid');
    
    let html = '<table class="schedule-table"><tr><th>HORA</th>';
    
    diasSemana.forEach(dia => {
        html += `<th>${dia}</th>`;
    });
    html += '</tr>';
    
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

// ===== ACTUALIZAR VISTAS =====
function actualizarVistas() {
    // Limpiar grid
    horas.forEach(hora => {
        diasSemana.forEach(dia => {
            document.getElementById(`cell-${dia}-${hora}`).innerHTML = '';
        });
    });
    
    // Llenar grid
    cursosSeleccionados.forEach((curso, idx) => {
        curso.seccion.horarios.forEach(horario => {
            const cellId = `cell-${horario.dia}-${horario.inicio}`;
            const cell = document.getElementById(cellId);
            
            if (cell) {
                const div = document.createElement('div');
                div.className = 'course-cell';
                div.innerHTML = `
                    <div class="course-cell-code">${curso.codigo}</div>
                    <div class="course-cell-teacher">${curso.seccion.docente.substring(0, 15)}</div>
                `;
                div.onclick = () => removerCurso(idx);
                div.title = `${curso.nombre}\nSección: ${curso.seccion.numero}\nAula: ${curso.seccion.aula}`;
                cell.appendChild(div);
            }
        });
    });
    
    // Actualizar cursos seleccionados
    const selectedDiv = document.getElementById('selectedCourses');
    
    if (cursosSeleccionados.length === 0) {
        selectedDiv.innerHTML = '<p class="empty-msg">Selecciona cursos para ver aquí</p>';
    } else {
        selectedDiv.innerHTML = '';
        cursosSeleccionados.forEach((curso, idx) => {
            const card = document.createElement('div');
            card.className = 'selected-card';
            
            const horariosText = curso.seccion.horarios
                .map(h => `${h.dia} ${h.inicio}-${h.fin}`)
                .join(' • ');
            
            card.innerHTML = `
                <button class="btn-remove" onclick="removerCurso(${idx})">✕</button>
                <h4>${curso.codigo}</h4>
                <p><strong>${curso.nombre}</strong></p>
                <p>👨‍🏫 ${curso.seccion.docente}</p>
                <p>📍 Sección: ${curso.seccion.numero}</p>
                <p>🏫 ${curso.seccion.aula}</p>
                <p>⏰ ${horariosText}</p>
            `;
            
            selectedDiv.appendChild(card);
        });
    }
}

// ===== REMOVER CURSO =====
function removerCurso(idx) {
    cursosSeleccionados.splice(idx, 1);
    actualizarVistas();
}

// ===== GUARDAR HORARIO =====
function guardarHorario() {
    if (cursosSeleccionados.length === 0) {
        alert('❌ Debes seleccionar al menos un curso');
        return;
    }
    
    const nombre = prompt('Nombre para este horario:');
    if (nombre) {
        horariosGuardados.push({
            nombre: nombre,
            cursos: JSON.parse(JSON.stringify(cursosSeleccionados)),
            fecha: new Date().toLocaleDateString()
        });
        localStorage.setItem('horariosGuardados', JSON.stringify(horariosGuardados));
        alert('✅ ¡Horario guardado exitosamente!');
    }
}

// ===== EXPORTAR PDF =====
function exportarPDF() {
    if (cursosSeleccionados.length === 0) {
        alert('❌ Debes seleccionar al menos un curso');
        return;
    }
    
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

// ===== LIMPIAR HORARIO =====
function limpiarHorario() {
    if (confirm('¿Estás seguro de limpiar todo el horario?')) {
        cursosSeleccionados = [];
        actualizarVistas();
    }
}
