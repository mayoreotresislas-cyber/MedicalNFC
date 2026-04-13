// ============================================
// Cabeza de Gato - Versión Identica (Redonda)
// ============================================

total_w = 60;      // Ancho total deseado
thickness = 4;     // Grosor de la pieza
$fn = 180;         // Alta resolución para curvas perfectas

module silueta_gato_geometria() {
    // 1. Usamos offset para suavizar las uniones y las puntas de las orejas
    offset(r = 1.5) 
    offset(r = -1.5)
    difference() {
        union() {
            // LA CARA: Un círculo perfecto (ligeramente ensanchado para el look de la imagen)
            scale([1.1, 0.95]) 
                circle(d = 55);

            // LAS OREJAS: Polígonos que salen de la cabeza
            // Oreja derecha
            polygon([[8, 25], [26, 38], [22, 0]]);
            // Oreja izquierda (espejo de la derecha)
            mirror([1, 0, 0]) 
                polygon([[8, 25], [26, 38], [22, 0]]);
        }

        // EL PUENTE: Un círculo posicionado arriba que resta material 
        // para crear la curva cóncava suave entre las orejas.
        translate([-5, 50]) 
            circle(r = 24);
        translate([5, 50]) 
            circle(r = 24);
    }
}
module salida_final() {
    // Calculamos el factor de escala para respetar los 60mm
    // La geometría base tiene aprox 54mm de ancho con las orejas
    scale_factor = total_w / 54; 
    
    scale([scale_factor, scale_factor, 1])
    linear_extrude(height = thickness)
        silueta_gato_geometria();
}

// Ejecutar
salida_final();