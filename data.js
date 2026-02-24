// Base de datos COMPLETA - Ciclos I a X - Facultad de Ciencias Contables
const cursos = [
    // ============ CICLO I ============
    {ciclo: "I", nombre: "CONTABILIDAD BÁSICA", codigo: "CO102", plan: "PLAN 2022", secciones: [
        {numero: "2410-01C", docente: "ORDO��EZ FERRO ANA CECILIA", aula: "FCC1A01", horarios: [{dia: "Lun", inicio: "08:00", fin: "10:30"}, {dia: "Mié", inicio: "08:00", fin: "09:40"}]},
        {numero: "5569-02C", docente: "TORRES CARRERA LUCY EMILIA", aula: "FCC1A02", horarios: [{dia: "Mar", inicio: "08:00", fin: "10:30"}, {dia: "Jue", inicio: "11:20", fin: "13:00"}]},
        {numero: "8497-04C", docente: "ROMERO DUEÑEZ LUIS EDUARDO", aula: "FCC1A03", horarios: [{dia: "Mié", inicio: "12:10", fin: "16:20"}]}
    ]},
    {ciclo: "I", nombre: "DERECHO PRIVADO Y PUBLICO", codigo: "DL801", plan: "PLAN 2022", secciones: [
        {numero: "0000-01C", docente: "POR DESIGNAR PROFESOR", aula: "FCC1A01", horarios: [{dia: "Jue", inicio: "08:00", fin: "11:20"}]},
        {numero: "2493-02C", docente: "CACEDA AYLLON ROGELIO CESAR", aula: "FCC1A02", horarios: [{dia: "Mié", inicio: "09:40", fin: "11:20"}, {dia: "Vie", inicio: "08:00", fin: "09:40"}]},
        {numero: "2493-04C", docente: "CACEDA AYLLON ROGELIO CESAR", aula: "FCC1A01", horarios: [{dia: "Mié", inicio: "16:20", fin: "18:00"}, {dia: "Vie", inicio: "16:20", fin: "18:00"}]}
    ]},
    {ciclo: "I", nombre: "MATEMÁTICA APLICADA", codigo: "MT121", plan: "PLAN 2022", secciones: [
        {numero: "0636-01C", docente: "SACIGA PALOMINO CESAR VIDAL", aula: "FCC1A01", horarios: [{dia: "Mar", inicio: "11:20", fin: "13:00"}, {dia: "Vie", inicio: "09:40", fin: "12:10"}]},
        {numero: "1386-02C", docente: "DE LA CRUZ GAONA EFRAIN PABLO", aula: "FCC1A02", horarios: [{dia: "Lun", inicio: "10:30", fin: "13:00"}, {dia: "Mié", inicio: "08:00", fin: "09:40"}]},
        {numero: "0636-04C", docente: "SACIGA PALOMINO CESAR VIDAL", aula: "FCC1A01", horarios: [{dia: "Mar", inicio: "15:30", fin: "17:10"}, {dia: "Jue", inicio: "15:30", fin: "18:00"}]},
        {numero: "0414-05C", docente: "ALCANTARA RAMIREZ MODESTO ROLAND", aula: "FCC1A02", horarios: [{dia: "Lun", inicio: "15:30", fin: "18:00"}, {dia: "Jue", inicio: "16:20", fin: "18:00"}]}
    ]},
    {ciclo: "I", nombre: "METÓDICA DEL TRABAJO UNIVERSITARIO", codigo: "HI132", plan: "PLAN 2022", secciones: [
        {numero: "0000-01C", docente: "POR DESIGNAR PROFESOR", aula: "FCC1A01", horarios: [{dia: "Mié", inicio: "11:20", fin: "13:00"}, {dia: "Vie", inicio: "08:00", fin: "09:40"}]},
        {numero: "0000-02C", docente: "POR DESIGNAR PROFESOR", aula: "FCC1A02", horarios: [{dia: "Lun", inicio: "08:00", fin: "09:40"}, {dia: "Vie", inicio: "09:40", fin: "11:20"}]},
        {numero: "0000-04C", docente: "POR DESIGNAR PROFESOR", aula: "FCC1A01", horarios: [{dia: "Lun", inicio: "13:50", fin: "15:30"}, {dia: "Jue", inicio: "13:00", fin: "14:40"}]}
    ]},
    {ciclo: "I", nombre: "TÉCNICAS DE ELOCUCIÓN Y REDACCIÓN", codigo: "HI131", plan: "PLAN 2022", secciones: [
        {numero: "2202-01C", docente: "MESIAS RATTO ROSA VICTORIA", aula: "FCC1A01", horarios: [{dia: "Lun", inicio: "10:30", fin: "12:10"}, {dia: "Mié", inicio: "09:40", fin: "11:20"}]},
        {numero: "2202-02C", docente: "MESIAS RATTO ROSA VICTORIA", aula: "FCC1A02", horarios: [{dia: "Mar", inicio: "10:30", fin: "12:10"}, {dia: "Mié", inicio: "11:20", fin: "13:00"}]},
        {numero: "2202-04C", docente: "MESIAS RATTO ROSA VICTORIA", aula: "FCC1A03", horarios: [{dia: "Lun", inicio: "12:10", fin: "13:50"}, {dia: "Mar", inicio: "12:10", fin: "13:50"}]}
    ]},
    {ciclo: "I", nombre: "TEORÍA Y DOCTRINA CONTABLE", codigo: "CO101", plan: "PLAN 2022", secciones: [
        {numero: "2974-01C", docente: "TORDOYA ROMERO HUMBERTO", aula: "FCC1A01", horarios: [{dia: "Mar", inicio: "08:00", fin: "11:20"}]},
        {numero: "5569-02C", docente: "TORRES CARRERA LUCY EMILIA", aula: "FCC1A02", horarios: [{dia: "Jue", inicio: "08:00", fin: "11:20"}]},
        {numero: "1369-04C", docente: "VERASTEGUI MATTOS LUIS ENRIQUE", aula: "FCC1A01", horarios: [{dia: "Vie", inicio: "13:00", fin: "16:20"}]}
    ]},

    // ============ CICLO II ============
    {ciclo: "II", nombre: "ADMINISTRACIÓN Y GESTIÓN EMPRESARIAL", codigo: "AD141", plan: "PLAN 2022", secciones: [
        {numero: "6181-01C", docente: "HUANCA CALLASACA HUMBERTO RUBEN", aula: "FCC3A11", horarios: [{dia: "Mar", inicio: "08:00", fin: "11:20"}]},
        {numero: "2885-02C", docente: "PAJUELO MENDOZA EMILIANO RAUL", aula: "FCC3A11", horarios: [{dia: "Vie", inicio: "08:00", fin: "11:20"}]},
        {numero: "1712-04C", docente: "CARDENAS LARA NOEDING EDITH", aula: "FCC3A11", horarios: [{dia: "Vie", inicio: "13:00", fin: "16:20"}]}
    ]},
    {ciclo: "II", nombre: "CONTABILIDAD INTERMEDIA", codigo: "CO103", plan: "PLAN 2022", secciones: [
        {numero: "2974-01C", docente: "TORDOYA ROMERO HUMBERTO", aula: "FCC2A06", horarios: [{dia: "Lun", inicio: "08:00", fin: "10:30"}, {dia: "Mié", inicio: "08:00", fin: "09:40"}]},
        {numero: "8497-02C", docente: "ROMERO DUEÑEZ LUIS EDUARDO", aula: "FCC2A06", horarios: [{dia: "Mar", inicio: "09:40", fin: "11:20"}, {dia: "Jue", inicio: "08:50", fin: "11:20"}]},
        {numero: "2227-04C", docente: "HUERTAS NIQUEN WALTER VICTOR", aula: "FCC2A06", horarios: [{dia: "Lun", inicio: "13:50", fin: "18:00"}]}
    ]},
    {ciclo: "II", nombre: "DERECHO CONSTITUCIONAL", codigo: "DL803", plan: "PLAN 2022", secciones: [
        {numero: "2493-01C", docente: "CACEDA AYLLON ROGELIO CESAR", aula: "FCC2A06", horarios: [{dia: "Mié", inicio: "11:20", fin: "13:00"}, {dia: "Vie", inicio: "11:20", fin: "13:00"}]},
        {numero: "2947-02C", docente: "LEON ZARATE ANA MERCEDES", aula: "FCC2A04", horarios: [{dia: "Lun", inicio: "08:00", fin: "11:20"}]},
        {numero: "0000-04C", docente: "POR DESIGNAR PROFESOR", aula: "FCC2A06", horarios: [{dia: "Mié", inicio: "13:00", fin: "14:40"}, {dia: "Vie", inicio: "16:20", fin: "18:00"}]}
    ]},
    {ciclo: "II", nombre: "DOCUMENTACIÓN Y REGISTROS CONTABLES", codigo: "CO104", plan: "PLAN 2022", secciones: [
        {numero: "1712-01C", docente: "CARDENAS LARA NOEDING EDITH", aula: "FCC2A04", horarios: [{dia: "Jue", inicio: "08:00", fin: "11:20"}]},
        {numero: "0000-02C", docente: "POR DESIGNAR PROFESOR", aula: "FCC2A04", horarios: [{dia: "Lun", inicio: "11:20", fin: "13:00"}, {dia: "Mar", inicio: "11:20", fin: "13:00"}]},
        {numero: "0000-04C", docente: "POR DESIGNAR PROFESOR", aula: "FCC2A04", horarios: [{dia: "Mar", inicio: "13:00", fin: "16:20"}]}
    ]},
    {ciclo: "II", nombre: "ESTADÍSTICA DESCRIPTIVA", codigo: "MT122", plan: "PLAN 2022", secciones: [
        {numero: "2806-01C", docente: "ANICETO CAPRISTAN ANNE ELIZABETH", aula: "FCC2A04", horarios: [{dia: "Vie", inicio: "08:00", fin: "11:20"}]},
        {numero: "1386-02C", docente: "DE LA CRUZ GAONA EFRAIN PABLO", aula: "FCC2A04", horarios: [{dia: "Mar", inicio: "08:00", fin: "09:40"}, {dia: "Mié", inicio: "11:20", fin: "13:00"}]},
        {numero: "0414-04C", docente: "ALCANTARA RAMIREZ MODESTO ROLAND", aula: "FCC2A04", horarios: [{dia: "Jue", inicio: "13:00", fin: "16:20"}]},
        {numero: "1386-05C", docente: "DE LA CRUZ GAONA EFRAIN PABLO", aula: "FCC3A08", horarios: [{dia: "Mar", inicio: "09:40", fin: "13:00"}]}
    ]},
    {ciclo: "II", nombre: "REALIDAD NACIONAL Y MUNDIAL", codigo: "HI133", plan: "PLAN 2022", secciones: [
        {numero: "2622-01C", docente: "FERNANDEZ ROJAS HERNAN TEOBALDO", aula: "FCC2A05", horarios: [{dia: "Mar", inicio: "11:20", fin: "13:00"}, {dia: "Jue", inicio: "11:20", fin: "13:00"}]},
        {numero: "2622-02C", docente: "FERNANDEZ ROJAS HERNAN TEOBALDO", aula: "FCC2A04", horarios: [{dia: "Mié", inicio: "08:00", fin: "11:20"}]},
        {numero: "2622-04C", docente: "FERNANDEZ ROJAS HERNAN TEOBALDO", aula: "FCC2A04", horarios: [{dia: "Mar", inicio: "16:20", fin: "18:00"}, {dia: "Jue", inicio: "16:20", fin: "18:00"}]}
    ]},

    // ============ CICLO III ============
    {ciclo: "III", nombre: "ADMINISTRACIÓN Y GESTIÓN DE LA PRODUCCIÓN", codigo: "AD143", plan: "PLAN 2022", secciones: [
        {numero: "0000-01C", docente: "POR DESIGNAR PROFESOR", aula: "FCC3A09", horarios: [{dia: "Mié", inicio: "11:20", fin: "13:00"}, {dia: "Vie", inicio: "08:00", fin: "09:40"}]},
        {numero: "2885-02C", docente: "PAJUELO MENDOZA EMILIANO RAUL", aula: "FCC3A09", horarios: [{dia: "Jue", inicio: "08:00", fin: "11:20"}]},
        {numero: "4092-04C", docente: "ENCALADA BACA GLADYS", aula: "FCC2A07", horarios: [{dia: "Lun", inicio: "14:40", fin: "16:20"}, {dia: "Mié", inicio: "14:40", fin: "16:20"}]},
        {numero: "0000-05C", docente: "POR DESIGNAR PROFESOR", aula: "FCC3A09", horarios: [{dia: "Mar", inicio: "13:00", fin: "14:40"}, {dia: "Jue", inicio: "13:00", fin: "14:40"}]}
    ]},
    {ciclo: "III", nombre: "CONTABILIDAD DE SOCIEDADES", codigo: "CO105", plan: "PLAN 2022", secciones: [
        {numero: "1938-01C", docente: "ZAPATA URDIALES JUAN JORGE", aula: "FCC4A16", horarios: [{dia: "Mar", inicio: "09:40", fin: "12:10"}, {dia: "Jue", inicio: "11:20", fin: "13:00"}]},
        {numero: "0000-02C", docente: "POR DESIGNAR PROFESOR", aula: "FCC4A16", horarios: [{dia: "Lun", inicio: "08:00", fin: "09:40"}, {dia: "Vie", inicio: "08:00", fin: "10:30"}]},
        {numero: "0000-04C", docente: "POR DESIGNAR PROFESOR", aula: "FCC4A16", horarios: [{dia: "Mar", inicio: "14:40", fin: "16:20"}, {dia: "Jue", inicio: "13:50", fin: "16:20"}]}
    ]},
    {ciclo: "III", nombre: "DERECHO COMERCIAL", codigo: "DL804", plan: "PLAN 2022", secciones: [
        {numero: "2583-01C", docente: "MERMA MOLINA GUIDO", aula: "FCC4A15", horarios: [{dia: "Jue", inicio: "08:00", fin: "11:20"}]},
        {numero: "2583-02C", docente: "MERMA MOLINA GUIDO", aula: "FCC4A15", horarios: [{dia: "Mar", inicio: "11:20", fin: "13:00"}, {dia: "Jue", inicio: "11:20", fin: "13:00"}]},
        {numero: "2996-04C", docente: "JULCA BABARZY MIGUEL ANGEL", aula: "FCC4A15", horarios: [{dia: "Mar", inicio: "16:20", fin: "18:00"}, {dia: "Jue", inicio: "16:20", fin: "18:00"}]}
    ]},
    {ciclo: "III", nombre: "ECONOMÍA GENERAL", codigo: "EC111", plan: "PLAN 2022", secciones: [
        {numero: "1710-01C", docente: "PINGO ZAPATA MANUEL ENRRIQUE", aula: "FCC4A16", horarios: [{dia: "Lun", inicio: "11:20", fin: "13:00"}, {dia: "Mar", inicio: "08:00", fin: "09:40"}]},
        {numero: "1710-02C", docente: "PINGO ZAPATA MANUEL ENRRIQUE", aula: "FCC4A16", horarios: [{dia: "Lun", inicio: "09:40", fin: "11:20"}, {dia: "Mié", inicio: "11:20", fin: "13:00"}]},
        {numero: "0000-04C", docente: "POR DESIGNAR PROFESOR", aula: "FCC4A16", horarios: [{dia: "Lun", inicio: "13:00", fin: "14:40"}, {dia: "Mié", inicio: "13:00", fin: "14:40"}]}
    ]},
    {ciclo: "III", nombre: "ESTADÍSTICA INFERENCIAL", codigo: "MT123", plan: "PLAN 2022", secciones: [
        {numero: "2806-01C", docente: "ANICETO CAPRISTAN ANNE ELIZABETH", aula: "FCC4A16", horarios: [{dia: "Mié", inicio: "08:00", fin: "11:20"}]},
        {numero: "0414-02C", docente: "ALCANTARA RAMIREZ MODESTO ROLAND", aula: "FCC5A17", horarios: [{dia: "Sáb", inicio: "08:50", fin: "12:10"}]},
        {numero: "2806-04C", docente: "ANICETO CAPRISTAN ANNE ELIZABETH", aula: "FCC4A16", horarios: [{dia: "Mar", inicio: "13:00", fin: "14:40"}, {dia: "Vie", inicio: "13:00", fin: "14:40"}]}
    ]},
    {ciclo: "III", nombre: "LIDERAZGO Y COMPORTAMIENTO ORGANIZACIONAL", codigo: "AD142", plan: "PLAN 2022", secciones: [
        {numero: "0695-01C", docente: "SANCHEZ PINEDO JOSE WILLIAM", aula: "FCC4A13", horarios: [{dia: "Lun", inicio: "08:00", fin: "11:20"}]},
        {numero: "0695-02C", docente: "SANCHEZ PINEDO JOSE WILLIAM", aula: "FCC4A13", horarios: [{dia: "Mié", inicio: "08:00", fin: "11:20"}]},
        {numero: "2885-04C", docente: "PAJUELO MENDOZA EMILIANO RAUL", aula: "FCC4A13", horarios: [{dia: "Mié", inicio: "16:20", fin: "18:00"}, {dia: "Vie", inicio: "16:20", fin: "18:00"}]}
    ]},

    // ============ CICLO IV ============
    {ciclo: "IV", nombre: "CONTABILIDAD DE COSTOS", codigo: "CT201", plan: "PLAN 2022", secciones: [
        {numero: "0000-01C", docente: "POR DESIGNAR PROFESOR", aula: "FCC4A13", horarios: [{dia: "Mar", inicio: "08:00", fin: "10:30"}, {dia: "Jue", inicio: "08:00", fin: "09:40"}]},
        {numero: "0000-02C", docente: "POR DESIGNAR PROFESOR", aula: "FCC4A12", horarios: [{dia: "Mié", inicio: "08:00", fin: "10:30"}, {dia: "Vie", inicio: "08:00", fin: "09:40"}]},
        {numero: "0000-04C", docente: "POR DESIGNAR PROFESOR", aula: "FCC4A12", horarios: [{dia: "Mié", inicio: "13:00", fin: "15:30"}, {dia: "Vie", inicio: "16:20", fin: "18:00"}]}
    ]},
    {ciclo: "IV", nombre: "DERECHO DEL TRABAJO", codigo: "DL805", plan: "PLAN 2022", secciones: [
        {numero: "2996-01C", docente: "JULCA BABARZY MIGUEL ANGEL", aula: "FCC4A13", horarios: [{dia: "Sáb", inicio: "08:50", fin: "12:10"}]},
        {numero: "2996-02C", docente: "JULCA BABARZY MIGUEL ANGEL", aula: "FCC5A20", horarios: [{dia: "Lun", inicio: "16:20", fin: "18:00"}, {dia: "Sáb", inicio: "13:00", fin: "14:40"}]},
        {numero: "2947-04C", docente: "LEON ZARATE ANA MERCEDES", aula: "FCC2A04", horarios: [{dia: "Vie", inicio: "13:00", fin: "16:20"}]}
    ]},
    {ciclo: "IV", nombre: "ECONOMÍA BANCARIA", codigo: "EC112", plan: "PLAN 2022", secciones: [
        {numero: "0354-02C", docente: "SALAZAR SANDOVAL FREDY VICENTE", aula: "FCC3A09", horarios: [{dia: "Mar", inicio: "11:20", fin: "13:00"}, {dia: "Jue", inicio: "11:20", fin: "13:00"}]},
        {numero: "0000-04C", docente: "POR DESIGNAR PROFESOR", aula: "FCC4A15", horarios: [{dia: "Mar", inicio: "13:00", fin: "16:20"}]},
        {numero: "1710-10C", docente: "PINGO ZAPATA MANUEL ENRRIQUE", aula: "FCC4A15", horarios: [{dia: "Jue", inicio: "18:50", fin: "22:10"}]}
    ]},
    {ciclo: "IV", nombre: "MARKETING EMPRESARIAL", codigo: "AD144", plan: "PLAN 2022", secciones: [
        {numero: "1370-01C", docente: "FERNANDEZ CHAPARRO MANUEL ERNESTO", aula: "FCC2A05", horarios: [{dia: "Vie", inicio: "08:00", fin: "11:20"}]},
        {numero: "4092-02C", docente: "ENCALADA BACA GLADYS", aula: "FCC2A05", horarios: [{dia: "Jue", inicio: "08:00", fin: "11:20"}]}
    ]},
    {ciclo: "IV", nombre: "MATEMÁTICA FINANCIERA Y ACTUARIAL", codigo: "MT124", plan: "PLAN 2022", secciones: [
        {numero: "1246-01C", docente: "ZANS ARIMANA WALTER", aula: "FCC5A20", horarios: [{dia: "Mar", inicio: "11:20", fin: "13:00"}, {dia: "Jue", inicio: "11:20", fin: "13:00"}]},
        {numero: "1246-02C", docente: "ZANS ARIMANA WALTER", aula: "FCC5A20", horarios: [{dia: "Vie", inicio: "09:40", fin: "13:00"}]},
        {numero: "2917-04C", docente: "PEÑA HUAMAN ROGER HERNANDO", aula: "FCC3A10", horarios: [{dia: "Lun", inicio: "14:40", fin: "16:20"}, {dia: "Mié", inicio: "15:30", fin: "17:10"}]},
        {numero: "1246-10C", docente: "ZANS ARIMANA WALTER", aula: "FCC5A20", horarios: [{dia: "Mié", inicio: "18:00", fin: "21:20"}]}
    ]},
    {ciclo: "IV", nombre: "NORMAS INTERNACIONALES DE INFORM. FINANCIERA I", codigo: "CO106", plan: "PLAN 2022", secciones: [
        {numero: "0000-01C", docente: "POR DESIGNAR PROFESOR", aula: "FCC4A15", horarios: [{dia: "Lun", inicio: "08:00", fin: "09:40"}, {dia: "Mié", inicio: "08:00", fin: "10:30"}]},
        {numero: "1369-02C", docente: "VERASTEGUI MATTOS LUIS ENRIQUE", aula: "FCC4A14", horarios: [{dia: "Lun", inicio: "08:50", fin: "13:00"}]},
        {numero: "2518-04C", docente: "SANCHEZ PANTA JUAN ROMAN", aula: "FCC4A15", horarios: [{dia: "Lun", inicio: "13:00", fin: "14:40"}, {dia: "Jue", inicio: "13:00", fin: "15:30"}]}
    ]},

    // ============ CICLO V ============
    {ciclo: "V", nombre: "DERECHO TRIBUTARIO", codigo: "DL806", plan: "PLAN 2022", secciones: [
        {numero: "2947-04C", docente: "LEON ZARATE ANA MERCEDES", aula: "FCC2A04", horarios: [{dia: "Mié", inicio: "13:00", fin: "16:20"}]},
        {numero: "2583-10C", docente: "MERMA MOLINA GUIDO", aula: "FCC4A16", horarios: [{dia: "Mar", inicio: "18:00", fin: "21:20"}]},
        {numero: "2518-11C", docente: "SANCHEZ PANTA JUAN ROMAN", aula: "FCC4A13", horarios: [{dia: "Mar", inicio: "18:00", fin: "21:20"}]}
    ]},
    {ciclo: "V", nombre: "EMPRENDIMIENTO E INNOVACIÓN EMPRESARIAL", codigo: "AD145", plan: "PLAN 2022", secciones: [
        {numero: "1370-04C", docente: "FERNANDEZ CHAPARRO MANUEL ERNESTO", aula: "FCC2A06", horarios: [{dia: "Jue", inicio: "13:00", fin: "16:20"}]},
        {numero: "0000-10C", docente: "POR DESIGNAR PROFESOR", aula: "FCC3A10", horarios: [{dia: "Vie", inicio: "18:00", fin: "21:20"}]},
        {numero: "0695-11C", docente: "SANCHEZ PINEDO JOSE WILLIAM", aula: "FCC3A10", horarios: [{dia: "Sáb", inicio: "08:00", fin: "11:20"}]}
    ]},
    {ciclo: "V", nombre: "FINANZAS PÚBLICAS", codigo: "EC113", plan: "PLAN 2022", secciones: [
        {numero: "0000-04C", docente: "POR DESIGNAR PROFESOR", aula: "FCC4A13", horarios: [{dia: "Vie", inicio: "13:00", fin: "16:20"}]},
        {numero: "0000-10C", docente: "POR DESIGNAR PROFESOR", aula: "FCC4A13", horarios: [{dia: "Lun", inicio: "18:00", fin: "21:20"}]},
        {numero: "0000-11C", docente: "POR DESIGNAR PROFESOR", aula: "FCC4A16", horarios: [{dia: "Lun", inicio: "20:30", fin: "22:10"}, {dia: "Vie", inicio: "18:00", fin: "19:40"}]}
    ]},
    {ciclo: "V", nombre: "INGLÉS I", codigo: "IN301", plan: "PLAN 2022", secciones: [
        {numero: "5850-04C", docente: "CRUZADO PORTALANZA ANGELA IVONNE", aula: "FCC4A12", horarios: [{dia: "Sáb", inicio: "11:20", fin: "13:50"}]},
        {numero: "5850-10C", docente: "CRUZADO PORTALANZA ANGELA IVONNE", aula: "FCC4A12", horarios: [{dia: "Sáb", inicio: "08:50", fin: "11:20"}]},
        {numero: "5850-11C", docente: "CRUZADO PORTALANZA ANGELA IVONNE", aula: "FCC5A17", horarios: [{dia: "Mié", inicio: "19:40", fin: "22:10"}]}
    ]},
    {ciclo: "V", nombre: "NORMAS INTERNACIONALES DE INFORMACIÓN FINANCIERA II", codigo: "CO107", plan: "PLAN 2022", secciones: [
        {numero: "1369-04C", docente: "VERASTEGUI MATTOS LUIS ENRIQUE", aula: "FCC4A13", horarios: [{dia: "Mar", inicio: "13:50", fin: "16:20"}, {dia: "Jue", inicio: "16:20", fin: "18:00"}]},
        {numero: "1223-10C", docente: "CABALLERO MONTANEZ RAUL WALTER", aula: "FCC4A16", horarios: [{dia: "Jue", inicio: "18:00", fin: "22:10"}]},
        {numero: "1223-11C", docente: "CABALLERO MONTANEZ RAUL WALTER", aula: "FCC4A16", horarios: [{dia: "Lun", inicio: "18:00", fin: "20:30"}, {dia: "Mié", inicio: "18:00", fin: "19:40"}]}
    ]},
    {ciclo: "V", nombre: "SISTEMAS DE COSTOS I", codigo: "CT202", plan: "PLAN 2022", secciones: [
        {numero: "2883-04C", docente: "HUAMAN RONDON LILIANA RUTH", aula: "FCC3A08", horarios: [{dia: "Lun", inicio: "13:50", fin: "17:10"}]},
        {numero: "2883-10C", docente: "HUAMAN RONDON LILIANA RUTH", aula: "FCC3A08", horarios: [{dia: "Mié", inicio: "18:00", fin: "21:20"}]},
        {numero: "0000-12C", docente: "POR DESIGNAR PROFESOR", aula: "FCC5A20", horarios: [{dia: "Lun", inicio: "18:00", fin: "21:20"}]}
    ]},

    // ============ CICLO VI ============
    {ciclo: "VI", nombre: "CONTABILIDAD SECTORIAL (ELECTIVO)", codigo: "EL901", plan: "PLAN 2022", secciones: [
        {numero: "2335-10C", docente: "VARGAS VENEGAS ANITA EMPERATRIZ", aula: "FCC4A14", horarios: [{dia: "Sáb", inicio: "11:20", fin: "14:40"}]},
        {numero: "1369-11C", docente: "VERASTEGUI MATTOS LUIS ENRIQUE", aula: "FCC3A09", horarios: [{dia: "Sáb", inicio: "08:00", fin: "11:20"}]},
        {numero: "0000-12C", docente: "POR DESIGNAR PROFESOR", aula: "FCC4A15", horarios: [{dia: "Vie", inicio: "18:00", fin: "21:20"}]}
    ]},
    {ciclo: "VI", nombre: "CONTROL INTERNO Y GESTIÓN DE RIESGOS (ELECTIVO)", codigo: "EL902", plan: "PLAN 2022", secciones: [
        {numero: "1747-04C", docente: "ESPINOZA VASQUEZ GLADYS", aula: "FCC4A15", horarios: [{dia: "Lun", inicio: "16:20", fin: "18:00"}, {dia: "Mié", inicio: "16:20", fin: "18:00"}]},
        {numero: "1336-10C", docente: "ALVAREZ GUADALUPE EMMA ROSARIO", aula: "FCC4A15", horarios: [{dia: "Sáb", inicio: "11:20", fin: "14:40"}]},
        {numero: "0000-11C", docente: "POR DESIGNAR PROFESOR", aula: "FCC4A14", horarios: [{dia: "Sáb", inicio: "08:00", fin: "11:20"}]}
    ]},
    {ciclo: "VI", nombre: "ESTADOS FINANCIEROS I", codigo: "CO109", plan: "PLAN 2022", secciones: [
        {numero: "1938-10C", docente: "ZAPATA URDIALES JUAN JORGE", aula: "FCC4A14", horarios: [{dia: "Lun", inicio: "18:00", fin: "22:10"}]},
        {numero: "6095-11C", docente: "RIMACHE INCA MARIBEL", aula: "FCC4A15", horarios: [{dia: "Mié", inicio: "18:00", fin: "22:10"}]},
        {numero: "5569-12C", docente: "TORRES CARRERA LUCY EMILIA", aula: "FCC3A10", horarios: [{dia: "Lun", inicio: "18:00", fin: "22:10"}]}
    ]},
    {ciclo: "VI", nombre: "INGLES II", codigo: "IN302", plan: "PLAN 2022", secciones: [
        {numero: "5850-10C", docente: "CRUZADO PORTALANZA ANGELA IVONNE", aula: "FCC5A17", horarios: [{dia: "Mié", inicio: "17:10", fin: "19:40"}]},
        {numero: "0000-11C", docente: "POR DESIGNAR PROFESOR", aula: "FCC4A13", horarios: [{dia: "Vie", inicio: "18:00", fin: "20:30"}]},
        {numero: "0000-12C", docente: "POR DESIGNAR PROFESOR", aula: "FCC3A11", horarios: [{dia: "Sáb", inicio: "08:50", fin: "11:20"}]}
    ]},
    {ciclo: "VI", nombre: "NORMAS INTERNACIONALES DE INFORMACIÓN FINANCIERA III", codigo: "CO108", plan: "PLAN 2022", secciones: [
        {numero: "0000-10C", docente: "POR DESIGNAR PROFESOR", aula: "FCC4A15", horarios: [{dia: "Sáb", inicio: "08:00", fin: "11:20"}]},
        {numero: "2335-11C", docente: "VARGAS VENEGAS ANITA EMPERATRIZ", aula: "FCC4A15", horarios: [{dia: "Lun", inicio: "18:00", fin: "21:20"}]},
        {numero: "0000-12C", docente: "POR DESIGNAR PROFESOR", aula: "FCC2A05", horarios: [{dia: "Sáb", inicio: "11:20", fin: "14:40"}]}
    ]},
    {ciclo: "VI", nombre: "SISTEMAS DE COSTOS II", codigo: "CT203", plan: "PLAN 2022", secciones: [
        {numero: "2817-10C", docente: "HERRERA MEL VICTOR HUGO", aula: "FCC4A12", horarios: [{dia: "Mar", inicio: "18:00", fin: "21:20"}]},
        {numero: "2883-11C", docente: "HUAMAN RONDON LILIANA RUTH", aula: "FCC4A13", horarios: [{dia: "Jue", inicio: "18:00", fin: "21:20"}]},
        {numero: "2817-12C", docente: "HERRERA MEL VICTOR HUGO", aula: "FCC4A13", horarios: [{dia: "Mié", inicio: "18:00", fin: "21:20"}]}
    ]},
    {ciclo: "VI", nombre: "TECNOLOGÍA DE LA INFORMACIÓN CONTABLE I", codigo: "IC501", plan: "PLAN 2022", secciones: [
        {numero: "0000-10C", docente: "POR DESIGNAR PROFESOR", aula: "FCC4A14", horarios: [{dia: "Vie", inicio: "18:00", fin: "21:20"}]},
        {numero: "0000-11C", docente: "POR DESIGNAR PROFESOR", aula: "FCC3A10", horarios: [{dia: "Sáb", inicio: "11:20", fin: "14:40"}]},
        {numero: "6095-12C", docente: "RIMACHE INCA MARIBEL", aula: "FCC4A15", horarios: [{dia: "Mar", inicio: "18:00", fin: "21:20"}]}
    ]},
    {ciclo: "VI", nombre: "TRIBUTOS I", codigo: "TB701", plan: "PLAN 2022", secciones: [
        {numero: "2518-10C", docente: "SANCHEZ PANTA JUAN ROMAN", aula: "FCC4A12", horarios: [{dia: "Jue", inicio: "18:00", fin: "21:20"}]},
        {numero: "8497-11C", docente: "ROMERO DUEÑEZ LUIS EDUARDO", aula: "FCC3A11", horarios: [{dia: "Mar", inicio: "18:00", fin: "21:20"}]},
        {numero: "1541-12C", docente: "VILELA JIMENEZ WILMER ARTURO", aula: "FCC3A11", horarios: [{dia: "Jue", inicio: "18:00", fin: "21:20"}]}
    ]},

    // ============ CICLO VII ============
    {ciclo: "VII", nombre: "CONTABILIDAD DEL SISTEMA FINANCIERO (ELECTIVO)", codigo: "EL903", plan: "PLAN 2022", secciones: [
        {numero: "0000-10C", docente: "POR DESIGNAR PROFESOR", aula: "FCC5A17", horarios: [{dia: "Vie", inicio: "18:00", fin: "21:20"}]},
        {numero: "0000-11C", docente: "POR DESIGNAR PROFESOR", aula: "FCC3A09", horarios: [{dia: "Sáb", inicio: "11:20", fin: "14:40"}]}
    ]},
    {ciclo: "VII", nombre: "ESTADOS FINANCIEROS II", codigo: "CO111", plan: "PLAN 2022", secciones: [
        {numero: "0000-10C", docente: "POR DESIGNAR PROFESOR", aula: "FCC3A09", horarios: [{dia: "Mar", inicio: "18:00", fin: "22:10"}]},
        {numero: "1712-11C", docente: "CARDENAS LARA NOEDING EDITH", aula: "FCC3A10", horarios: [{dia: "Mar", inicio: "18:00", fin: "22:10"}]},
        {numero: "2817-12C", docente: "HERRERA MEL VICTOR HUGO", aula: "FCC3A11", horarios: [{dia: "Lun", inicio: "18:00", fin: "22:10"}]}
    ]},
    {ciclo: "VII", nombre: "METODOLOGÍA DE LA INVESTIGACIÓN CIENTÍFICA", codigo: "HI134", plan: "PLAN 2022", secciones: [
        {numero: "0000-10C", docente: "POR DESIGNAR PROFESOR", aula: "FCC3A10", horarios: [{dia: "Jue", inicio: "18:00", fin: "21:20"}]},
        {numero: "2410-11C", docente: "ORDOÑEZ FERRO ANA CECILIA", aula: "FCC3A09", horarios: [{dia: "Jue", inicio: "18:00", fin: "21:20"}]}
    ]},
    {ciclo: "VII", nombre: "NORMAS DE AUDITORÍA", codigo: "AU601", plan: "PLAN 2022", secciones: [
        {numero: "1336-10C", docente: "ALVAREZ GUADALUPE EMMA ROSARIO", aula: "FCC4A14", horarios: [{dia: "Mié", inicio: "18:00", fin: "21:20"}]},
        {numero: "6181-11C", docente: "HUANCA CALLASACA HUMBERTO RUBEN", aula: "FCC3A10", horarios: [{dia: "Mié", inicio: "18:00", fin: "21:20"}]},
        {numero: "6168-12C", docente: "TAFUR ALEGRIA ESTHER ELEN", aula: "FCC5A17", horarios: [{dia: "Mar", inicio: "18:00", fin: "19:40"}, {dia: "Jue", inicio: "18:00", fin: "19:40"}]}
    ]},
    {ciclo: "VII", nombre: "NORMAS INTERNACIONALES PARA PYMES", codigo: "CO110", plan: "PLAN 2022", secciones: [
        {numero: "0000-10C", docente: "POR DESIGNAR PROFESOR", aula: "FCC3A11", horarios: [{dia: "Sáb", inicio: "11:20", fin: "14:40"}]},
        {numero: "2335-11C", docente: "VARGAS VENEGAS ANITA EMPERATRIZ", aula: "FCC4A12", horarios: [{dia: "Vie", inicio: "18:00", fin: "21:20"}]}
    ]},
    {ciclo: "VII", nombre: "PERITAJE CONTABLE JUDICIAL Y TASACIONES (ELECTIVO)", codigo: "EL904", plan: "PLAN 2022", secciones: [
        {numero: "1336-10C", docente: "ALVAREZ GUADALUPE EMMA ROSARIO", aula: "FCC3A11", horarios: [{dia: "Vie", inicio: "18:00", fin: "21:20"}]},
        {numero: "0000-11C", docente: "POR DESIGNAR PROFESOR", aula: "FCC3A08", horarios: [{dia: "Sáb", inicio: "11:20", fin: "14:40"}]},
        {numero: "0000-12C", docente: "POR DESIGNAR PROFESOR", aula: "FCC2A07", horarios: [{dia: "Sáb", inicio: "08:50", fin: "12:10"}]}
    ]},
    {ciclo: "VII", nombre: "TECNOLOGÍA DE LA INFORMACIÓN CONTABLE II", codigo: "IC502", plan: "PLAN 2022", secciones: [
        {numero: "0000-10C", docente: "POR DESIGNAR PROFESOR", aula: "FCC3A08", horarios: [{dia: "Sáb", inicio: "08:00", fin: "11:20"}]},
        {numero: "0000-11C", docente: "POR DESIGNAR PROFESOR", aula: "FCC2A05", horarios: [{dia: "Sáb", inicio: "08:00", fin: "11:20"}]},
        {numero: "0000-12C", docente: "POR DESIGNAR PROFESOR", aula: "FCC2A05", horarios: [{dia: "Mar", inicio: "19:40", fin: "21:20"}, {dia: "Jue", inicio: "19:40", fin: "21:20"}]}
    ]},
    {ciclo: "VII", nombre: "TRIBUTOS II", codigo: "TB702", plan: "PLAN 2022", secciones: [
        {numero: "1541-10C", docente: "VILELA JIMENEZ WILMER ARTURO", aula: "FCC3A09", horarios: [{dia: "Lun", inicio: "18:00", fin: "21:20"}]},
        {numero: "8497-11C", docente: "ROMERO DUEÑEZ LUIS EDUARDO", aula: "FCC2A06", horarios: [{dia: "Lun", inicio: "18:00", fin: "21:20"}]},
        {numero: "2518-12C", docente: "SANCHEZ PANTA JUAN ROMAN", aula: "FCC2A04", horarios: [{dia: "Vie", inicio: "18:00", fin: "21:20"}]}
    ]},

    // ============ CICLO VIII ============
    {ciclo: "VIII", nombre: "AUDITORÍA FINANCIERA I", codigo: "AU602", plan: "PLAN 2022", secciones: [
        {numero: "6092-10C", docente: "ARGOTE LAZON LINA", aula: "FCC4A16", horarios: [{dia: "Mié", inicio: "19:40", fin: "22:10"}, {dia: "Vie", inicio: "19:40", fin: "21:20"}]},
        {numero: "0938-11C", docente: "PEZO MELENDEZ RONAL", aula: "FCC4A14", horarios: [{dia: "Mar", inicio: "19:40", fin: "22:10"}, {dia: "Jue", inicio: "20:30", fin: "22:10"}]},
        {numero: "1747-12C", docente: "ESPINOZA VASQUEZ GLADYS", aula: "FCC3A08", horarios: [{dia: "Mar", inicio: "18:00", fin: "19:40"}, {dia: "Jue", inicio: "18:00", fin: "20:30"}]}
    ]},
    {ciclo: "VIII", nombre: "AUDITORIA FORENSE (ELECTIVO)", codigo: "EL906", plan: "PLAN 2022", secciones: [
        {numero: "0000-10C", docente: "POR DESIGNAR PROFESOR", aula: "FCC2A06", horarios: [{dia: "Sáb", inicio: "12:10", fin: "15:30"}]},
        {numero: "0000-11C", docente: "POR DESIGNAR PROFESOR", aula: "FCC2A06", horarios: [{dia: "Sáb", inicio: "08:50", fin: "12:10"}]}
    ]},
    {ciclo: "VIII", nombre: "CONTABILIDAD ADUANERA (ELECTIVO)", codigo: "EL905", plan: "PLAN 2022", secciones: [
        {numero: "0000-10C", docente: "POR DESIGNAR PROFESOR", aula: "FCC4A13", horarios: [{dia: "Sáb", inicio: "12:10", fin: "15:30"}]},
        {numero: "0000-11C", docente: "POR DESIGNAR PROFESOR", aula: "FCC4A16", horarios: [{dia: "Sáb", inicio: "08:50", fin: "12:10"}]}
    ]},
    {ciclo: "VIII", nombre: "ÉTICA PROFESIONAL", codigo: "HI135", plan: "PLAN 2022", secciones: [
        {numero: "6181-10C", docente: "HUANCA CALLASACA HUMBERTO RUBEN", aula: "FCC3A08", horarios: [{dia: "Lun", inicio: "18:00", fin: "21:20"}]},
        {numero: "6168-11C", docente: "TAFUR ALEGRIA ESTHER ELEN", aula: "FCC1A01", horarios: [{dia: "Mié", inicio: "20:30", fin: "22:10"}, {dia: "Vie", inicio: "18:00", fin: "19:40"}]},
        {numero: "2033-12C", docente: "POLO - LUZ ROSARIO", aula: "FCC2A04", horarios: [{dia: "Lun", inicio: "18:00", fin: "21:20"}]}
    ]},
    {ciclo: "VIII", nombre: "FINANZAS DE EMPRESAS I", codigo: "FZ121", plan: "PLAN 2022", secciones: [
        {numero: "2917-10C", docente: "PEÑA HUAMAN ROGER HERNANDO", aula: "FCC2A04", horarios: [{dia: "Mar", inicio: "19:40", fin: "22:10"}, {dia: "Jue", inicio: "20:30", fin: "22:10"}]},
        {numero: "0000-11C", docente: "POR DESIGNAR PROFESOR", aula: "FCC1A03", horarios: [{dia: "Mar", inicio: "18:00", fin: "19:40"}, {dia: "Jue", inicio: "18:00", fin: "20:30"}]},
        {numero: "0000-12C", docente: "POR DESIGNAR PROFESOR", aula: "FCC1A03", horarios: [{dia: "Mar", inicio: "19:40", fin: "22:10"}, {dia: "Jue", inicio: "20:30", fin: "22:10"}]}
    ]},
    {ciclo: "VIII", nombre: "FINANZAS DE EMPRESAS II", codigo: "CFZ124", plan: "PLAN 2019", secciones: [
        {numero: "2917-10C", docente: "PEÑA HUAMAN ROGER HERNANDO", aula: "FCC2A04", horarios: [{dia: "Mar", inicio: "18:00", fin: "19:40"}, {dia: "Jue", inicio: "18:00", fin: "20:30"}]}
    ]},
    {ciclo: "VIII", nombre: "GESTIÓN Y CONTABILIDAD PÚBLICA I", codigo: "CG401", plan: "PLAN 2022", secciones: [
        {numero: "2033-10C", docente: "POLO - LUZ ROSARIO", aula: "FCC2A05", horarios: [{dia: "Mar", inicio: "18:00", fin: "19:40"}, {dia: "Jue", inicio: "18:00", fin: "19:40"}]},
        {numero: "1713-11C", docente: "SOSA RUIZ JOSE BALDUINO", aula: "FCC2A07", horarios: [{dia: "Lun", inicio: "18:00", fin: "19:40"}, {dia: "Mié", inicio: "18:00", fin: "19:40"}]}
    ]},
    {ciclo: "VIII", nombre: "PROYECTO DE TESIS", codigo: "HI136", plan: "PLAN 2022", secciones: [
        {numero: "6092-10C", docente: "ARGOTE LAZON LINA", aula: "FCC3A09", horarios: [{dia: "Mié", inicio: "18:00", fin: "19:40"}, {dia: "Vie", inicio: "18:00", fin: "19:40"}]},
        {numero: "1713-11C", docente: "SOSA RUIZ JOSE BALDUINO", aula: "FCC1A01", horarios: [{dia: "Lun", inicio: "19:40", fin: "21:20"}, {dia: "Vie", inicio: "19:40", fin: "21:20"}]}
    ]},
    {ciclo: "VIII", nombre: "TESIS III", codigo: "CHI138", plan: "PLAN 2019", secciones: [
        {numero: "2410-10C", docente: "ORDOÑEZ FERRO ANA CECILIA", aula: "FCC2A05", horarios: [{dia: "Lun", inicio: "18:00", fin: "20:30"}, {dia: "Mié", inicio: "18:00", fin: "19:40"}]}
    ]},
    {ciclo: "VIII", nombre: "TRIBUTOS ESPECIALES Y SECTORIALES", codigo: "TB703", plan: "PLAN 2022", secciones: [
        {numero: "0000-10C", docente: "POR DESIGNAR PROFESOR", aula: "FCC2A04", horarios: [{dia: "Sáb", inicio: "08:50", fin: "12:10"}]},
        {numero: "0000-11C", docente: "POR DESIGNAR PROFESOR", aula: "FCC2A04", horarios: [{dia: "Sáb", inicio: "12:10", fin: "15:30"}]},
        {numero: "1541-12C", docente: "VILELA JIMENEZ WILMER ARTURO", aula: "FCC2A06", horarios: [{dia: "Mié", inicio: "18:00", fin: "19:40"}, {dia: "Vie", inicio: "18:00", fin: "19:40"}]}
    ]},

    // ============ CICLO IX ============
    {ciclo: "IX", nombre: "AUDITORÍA FINANCIERA II", codigo: "CAU604", plan: "PLAN 2019", secciones: [
        {numero: "0000-10C", docente: "POR DESIGNAR PROFESOR", aula: "FCC1A02", horarios: [{dia: "Lun", inicio: "18:00", fin: "19:40"}, {dia: "Mié", inicio: "18:00", fin: "19:40"}]},
        {numero: "0000-11C", docente: "POR DESIGNAR PROFESOR", aula: "FCC1A01", horarios: [{dia: "Lun", inicio: "18:00", fin: "19:40"}, {dia: "Mié", inicio: "18:00", fin: "19:40"}]},
        {numero: "1747-12C", docente: "ESPINOZA VASQUEZ GLADYS", aula: "FCC4A12", horarios: [{dia: "Lun", inicio: "18:00", fin: "19:40"}, {dia: "Mié", inicio: "18:00", fin: "19:40"}]}
    ]},
    {ciclo: "IX", nombre: "AUDITORÍA TRIBUTARIA", codigo: "CAU603", plan: "PLAN 2019", secciones: [
        {numero: "1713-10C", docente: "SOSA RUIZ JOSE BALDUINO", aula: "FCC1A02", horarios: [{dia: "Mar", inicio: "19:40", fin: "21:20"}, {dia: "Jue", inicio: "20:30", fin: "22:10"}]},
        {numero: "1713-11C", docente: "SOSA RUIZ JOSE BALDUINO", aula: "FCC1A01", horarios: [{dia: "Mar", inicio: "18:00", fin: "19:40"}, {dia: "Jue", inicio: "18:00", fin: "19:40"}]}
    ]},
    {ciclo: "IX", nombre: "CONTABILIDAD DE EMPRESAS EXTRACTIVAS Y MANUFACTURERAS (E)", codigo: "CEL907", plan: "PLAN 2019", secciones: [
        {numero: "0000-10C", docente: "POR DESIGNAR PROFESOR", aula: "FCC5A20", horarios: [{dia: "Sáb", inicio: "08:50", fin: "12:10"}]},
        {numero: "0000-11C", docente: "POR DESIGNAR PROFESOR", aula: "FCC5A19", horarios: [{dia: "Sáb", inicio: "08:50", fin: "12:10"}]}
    ]},
    {ciclo: "IX", nombre: "CONTABILIDAD GERENCIAL", codigo: "CFZ125", plan: "PLAN 2019", secciones: [
        {numero: "1223-10C", docente: "CABALLERO MONTANEZ RAUL WALTER", aula: "FCC2A07", horarios: [{dia: "Lun", inicio: "20:30", fin: "22:10"}, {dia: "Mié", inicio: "19:40", fin: "21:20"}]},
        {numero: "0000-11C", docente: "POR DESIGNAR PROFESOR", aula: "FCC1A02", horarios: [{dia: "Lun", inicio: "20:30", fin: "22:10"}, {dia: "Mié", inicio: "19:40", fin: "21:20"}]}
    ]},
    {ciclo: "IX", nombre: "GESTIÓN Y CONTABILIDAD PÚBLICA II", codigo: "CCG402", plan: "PLAN 2019", secciones: [
        {numero: "0724-10C", docente: "VICENTE ALVA ROSARIO WIELICHE", aula: "FCC1A02", horarios: [{dia: "Mar", inicio: "18:00", fin: "19:40"}, {dia: "Jue", inicio: "18:00", fin: "20:30"}]},
        {numero: "2033-11C", docente: "POLO - LUZ ROSARIO", aula: "FCC2A07", horarios: [{dia: "Mar", inicio: "19:40", fin: "21:20"}, {dia: "Jue", inicio: "19:40", fin: "22:10"}]}
    ]},
    {ciclo: "IX", nombre: "METODOLOGÍA DE LA ENSEÑANZA CONTABLE (E)", codigo: "CEL908", plan: "PLAN 2019", secciones: [
        {numero: "1370-10C", docente: "FERNANDEZ CHAPARRO MANUEL ERNESTO", aula: "FCC1A01", horarios: [{dia: "Sáb", inicio: "08:50", fin: "12:10"}]}
    ]},
    {ciclo: "IX", nombre: "PRACTICAS PRE PROFESIONALES I", codigo: "CPP101", plan: "PLAN 2019", secciones: [
        {numero: "0000-10C", docente: "POR DESIGNAR PROFESOR", aula: "FCC3A08", horarios: [{dia: "Vie", inicio: "18:00", fin: "21:20"}]},
        {numero: "0000-11C", docente: "POR DESIGNAR PROFESOR", aula: "FCC2A07", horarios: [{dia: "Vie", inicio: "18:00", fin: "21:20"}]},
        {numero: "0000-12C", docente: "POR DESIGNAR PROFESOR", aula: "FCC5A20", horarios: [{dia: "Mar", inicio: "18:00", fin: "19:40"}, {dia: "Jue", inicio: "18:00", fin: "19:40"}]}
    ]},

    // ============ CICLO X ============
    {ciclo: "X", nombre: "AUDITORÍA EMPRESARIAL", codigo: "CAU607", plan: "PLAN 2019", secciones: [
        {numero: "6092-10C", docente: "ARGOTE LAZON LINA", aula: "FCC2A06", horarios: [{dia: "Mar", inicio: "18:00", fin: "19:40"
