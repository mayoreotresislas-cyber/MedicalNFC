$fn = 180;

include <nfc_medical_keychain_paw_pet_final_v7.scad>

color([0.92, 0.03, 0.03])
    difference() {
        paw_2d();
        translate([hole_x, hole_y]) circle(d = hole_d);
    }
