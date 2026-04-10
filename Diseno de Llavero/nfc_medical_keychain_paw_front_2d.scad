user_show_model = false;
user_show_front_preview = false;
user_show_back_preview = false;
include <nfc_medical_keychain_paw_preview.scad>

color([0.92, 0.03, 0.03])
    difference() {
        paw_2d();
        translate([0, hole_y]) circle(d = hole_d);
    }

color("white")
    front_art_2d();
