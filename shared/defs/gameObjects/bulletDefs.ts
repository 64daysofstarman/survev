import { defineSkin } from "../../utils/util";

export interface BulletDef {
    readonly type: "bullet"
    damage: number
    obstacleDamage: number
    falloff: number
    distance: number
    speed: number
    variance: number
    shrapnel: boolean
    tracerColor: string
    tracerWidth: number
    tracerLength: number
    suppressed?: boolean
    flareColor?: number
    addFlare?: boolean
    maxFlareScale?: number
    skipCollision?: boolean
    onHit?: string
}

function defineBulletSkin(baseType: string, params: Partial<BulletDef>) {
    return defineSkin<BulletDef>(BaseDefs, baseType, params);
}

export const BaseDefs: Record<string, BulletDef> = {
    bullet_mp5: {
        type: "bullet",
        damage: 11,
        obstacleDamage: 1,
        falloff: 0.8,
        distance: 100,
        speed: 85,
        variance: 0,
        shrapnel: false,
        tracerColor: "9mm",
        tracerWidth: 0.1,
        tracerLength: 0.7
    },
    bullet_ak47: {
        type: "bullet",
        damage: 13.5,
        obstacleDamage: 1,
        falloff: 0.9,
        distance: 200,
        speed: 100,
        variance: 0,
        shrapnel: false,
        tracerColor: "762mm",
        tracerWidth: 0.1,
        tracerLength: 0.9
    },
    bullet_scar: {
        type: "bullet",
        damage: 15,
        obstacleDamage: 1,
        falloff: 0.85,
        distance: 175,
        speed: 108,
        variance: 0,
        shrapnel: false,
        tracerColor: "762mm",
        tracerWidth: 0.1,
        tracerLength: 0.9
    },
    bullet_an94: {
        type: "bullet",
        damage: 17.5,
        obstacleDamage: 1,
        falloff: 0.94,
        distance: 300,
        speed: 110,
        variance: 0,
        shrapnel: false,
        tracerColor: "762mm",
        tracerWidth: 0.1,
        tracerLength: 0.9
    },
    bullet_groza: {
        type: "bullet",
        damage: 12.5,
        obstacleDamage: 1,
        falloff: 0.85,
        distance: 175,
        speed: 104,
        variance: 0,
        shrapnel: false,
        tracerColor: "762mm",
        tracerWidth: 0.1,
        tracerLength: 0.9
    },
    bullet_grozas: {
        type: "bullet",
        damage: 13,
        obstacleDamage: 1,
        falloff: 0.87,
        distance: 185,
        speed: 106,
        variance: 0,
        shrapnel: false,
        suppressed: true,
        tracerColor: "762mm",
        tracerWidth: 0.1,
        tracerLength: 0.9
    },
    bullet_model94: {
        type: "bullet",
        damage: 44,
        obstacleDamage: 1,
        falloff: 0.75,
        distance: 175,
        speed: 156,
        variance: 0,
        shrapnel: false,
        tracerColor: "45acp",
        tracerWidth: 0.12,
        tracerLength: 1
    },
    bullet_blr: {
        type: "bullet",
        damage: 56,
        obstacleDamage: 1,
        falloff: 0.9,
        distance: 400,
        speed: 160,
        variance: 0,
        shrapnel: false,
        tracerColor: "762mm",
        tracerWidth: 0.14,
        tracerLength: 1
    },
    bullet_mosin: {
        type: "bullet",
        damage: 72,
        obstacleDamage: 1.5,
        falloff: 0.95,
        distance: 500,
        speed: 178,
        variance: 0,
        shrapnel: false,
        tracerColor: "762mm",
        tracerWidth: 0.16,
        tracerLength: 1
    },
    bullet_sv98: {
        type: "bullet",
        damage: 80,
        obstacleDamage: 1.5,
        falloff: 0.96,
        distance: 520,
        speed: 182,
        variance: 0,
        shrapnel: false,
        tracerColor: "762mm",
        tracerWidth: 0.2,
        tracerLength: 1
    },
    bullet_awc: {
        type: "bullet",
        damage: 180,
        obstacleDamage: 1.5,
        falloff: 0.94,
        distance: 300,
        speed: 136,
        variance: 0,
        shrapnel: false,
        suppressed: true,
        tracerColor: "308sub",
        tracerWidth: 0.2,
        tracerLength: 1
    },
    bullet_scarssr: {
        type: "bullet",
        damage: 60,
        obstacleDamage: 1.5,
        falloff: 0.85,
        distance: 200,
        speed: 108,
        variance: 0,
        shrapnel: false,
        suppressed: true,
        tracerColor: "308sub",
        tracerWidth: 0.14,
        tracerLength: 1
    },
    bullet_m39: {
        type: "bullet",
        damage: 27,
        obstacleDamage: 1,
        falloff: 0.9,
        distance: 400,
        speed: 125,
        variance: 0,
        shrapnel: false,
        tracerColor: "762mm",
        tracerWidth: 0.1,
        tracerLength: 0.9
    },
    bullet_svd: {
        type: "bullet",
        damage: 36,
        obstacleDamage: 1,
        falloff: 0.9,
        distance: 425,
        speed: 127,
        variance: 0,
        shrapnel: false,
        tracerColor: "762mm",
        tracerWidth: 0.1,
        tracerLength: 0.9
    },
    bullet_garand: {
        type: "bullet",
        damage: 35,
        obstacleDamage: 1,
        falloff: 0.9,
        distance: 400,
        speed: 130,
        variance: 0,
        shrapnel: false,
        tracerColor: "762mm",
        tracerWidth: 0.12,
        tracerLength: 0.9
    },
    bullet_buckshot: {
        type: "bullet",
        damage: 12.5,
        obstacleDamage: 1,
        falloff: 0.3,
        speed: 66,
        distance: 27,
        variance: 0,
        shrapnel: false,
        tracerColor: "12gauge",
        tracerWidth: 0.1,
        tracerLength: 0.8
    },
    bullet_flechette: {
        type: "bullet",
        damage: 8.75,
        obstacleDamage: 1,
        falloff: 0.85,
        speed: 88,
        distance: 45,
        variance: 0,
        shrapnel: false,
        tracerColor: "12gauge",
        tracerWidth: 0.075,
        tracerLength: 0.5
    },
    bullet_frag: {
        type: "bullet",
        damage: 12,
        obstacleDamage: 1,
        falloff: 0.3,
        speed: 72,
        distance: 24,
        variance: 0,
        shrapnel: false,
        tracerColor: "frag",
        tracerWidth: 0.1,
        tracerLength: 0.5,
        onHit: "explosion_usas"
    },
    bullet_slug: {
        type: "bullet",
        damage: 77,
        obstacleDamage: 1,
        falloff: 0.85,
        speed: 118,
        distance: 60,
        variance: 0,
        shrapnel: false,
        tracerColor: "12gauge",
        tracerWidth: 0.2,
        tracerLength: 0.4
    },
    bullet_birdshot: {
        type: "bullet",
        damage: 4,
        obstacleDamage: 1,
        falloff: 0.25,
        speed: 66,
        distance: 25,
        variance: 0,
        shrapnel: false,
        tracerColor: "12gauge",
        tracerWidth: 0.1,
        tracerLength: 0.1
    },
    bullet_m9: {
        type: "bullet",
        damage: 12,
        obstacleDamage: 1,
        falloff: 0.7,
        speed: 85,
        distance: 100,
        variance: 0,
        shrapnel: false,
        tracerColor: "9mm",
        tracerWidth: 0.1,
        tracerLength: 0.7
    },
    bullet_m9_cursed: {
        type: "bullet",
        damage: 12,
        obstacleDamage: 1,
        falloff: 0.7,
        speed: 85,
        distance: 100,
        variance: 0,
        shrapnel: false,
        tracerColor: "9mm_cursed",
        tracerWidth: 0.1,
        tracerLength: 0.7
    },
    bullet_m93r: {
        type: "bullet",
        damage: 12,
        obstacleDamage: 1,
        falloff: 0.7,
        speed: 85,
        distance: 100,
        variance: 0,
        shrapnel: false,
        tracerColor: "9mm",
        tracerWidth: 0.1,
        tracerLength: 0.7
    },
    bullet_p30l: {
        type: "bullet",
        damage: 21,
        obstacleDamage: 1,
        falloff: 0.75,
        speed: 94,
        distance: 100,
        variance: 0,
        shrapnel: false,
        tracerColor: "9mm",
        tracerWidth: 0.12,
        tracerLength: 0.8
    },
    bullet_ot38: {
        type: "bullet",
        damage: 26,
        obstacleDamage: 1,
        falloff: 0.75,
        speed: 112,
        distance: 125,
        variance: 0,
        shrapnel: false,
        tracerColor: "762mm",
        tracerWidth: 0.09,
        tracerLength: 0.8
    },
    bullet_ots38: {
        type: "bullet",
        damage: 32,
        obstacleDamage: 1,
        falloff: 0.77,
        speed: 115,
        distance: 135,
        variance: 0,
        shrapnel: false,
        suppressed: true,
        tracerColor: "762mm",
        tracerWidth: 0.1,
        tracerLength: 0.8
    },
    bullet_colt45: {
        type: "bullet",
        damage: 29,
        obstacleDamage: 1,
        falloff: 0.7,
        speed: 106,
        distance: 110,
        variance: 0,
        shrapnel: false,
        tracerColor: "45acp",
        tracerWidth: 0.09,
        tracerLength: 0.8
    },
    bullet_m1911: {
        type: "bullet",
        damage: 14,
        obstacleDamage: 1,
        falloff: 0.7,
        speed: 80,
        distance: 88,
        variance: 0,
        shrapnel: false,
        tracerColor: "45acp",
        tracerWidth: 0.1,
        tracerLength: 0.7
    },
    bullet_m1a1: {
        type: "bullet",
        damage: 13,
        obstacleDamage: 1,
        falloff: 0.8,
        distance: 88,
        speed: 80,
        variance: 0,
        shrapnel: false,
        tracerColor: "45acp",
        tracerWidth: 0.1,
        tracerLength: 0.7
    },
    bullet_mkg45: {
        type: "bullet",
        damage: 28,
        obstacleDamage: 1,
        falloff: 0.75,
        distance: 145,
        speed: 126,
        variance: 0,
        shrapnel: false,
        tracerColor: "45acp",
        tracerWidth: 0.1,
        tracerLength: 0.9
    },
    bullet_deagle: {
        type: "bullet",
        damage: 35,
        obstacleDamage: 1,
        falloff: 0.75,
        speed: 115,
        distance: 120,
        variance: 0,
        shrapnel: false,
        tracerColor: "50AE",
        tracerWidth: 0.12,
        tracerLength: 0.8
    },
    bullet_mac10: {
        type: "bullet",
        damage: 9.25,
        obstacleDamage: 1,
        falloff: 0.6,
        distance: 50,
        speed: 75,
        variance: 0,
        shrapnel: false,
        tracerColor: "9mm",
        tracerWidth: 0.1,
        tracerLength: 0.7
    },
    bullet_ump9: {
        type: "bullet",
        damage: 15,
        obstacleDamage: 1,
        falloff: 0.75,
        distance: 100,
        speed: 100,
        variance: 0,
        shrapnel: false,
        tracerColor: "9mm",
        tracerWidth: 0.1,
        tracerLength: 0.7
    },
    bullet_vector: {
        type: "bullet",
        damage: 7.5,
        obstacleDamage: 1,
        falloff: 0.6,
        distance: 46,
        speed: 88,
        variance: 0,
        shrapnel: false,
        tracerColor: "9mm",
        tracerWidth: 0.1,
        tracerLength: 0.7
    },
    bullet_vector45: {
        type: "bullet",
        damage: 9.5,
        obstacleDamage: 1,
        falloff: 0.6,
        distance: 45,
        speed: 82,
        variance: 0,
        shrapnel: false,
        tracerColor: "45acp",
        tracerWidth: 0.1,
        tracerLength: 0.7
    },
    bullet_scorpion: {
        type: "bullet",
        damage: 10.75,
        obstacleDamage: 1,
        falloff: 0.77,
        distance: 120,
        speed: 90,
        variance: 0,
        shrapnel: false,
        suppressed: true,
        tracerColor: "9mm",
        tracerWidth: 0.1,
        tracerLength: 0.7
    },
    bullet_vss: {
        type: "bullet",
        damage: 22,
        obstacleDamage: 1,
        falloff: 0.8,
        distance: 125,
        speed: 95,
        variance: 0,
        shrapnel: false,
        suppressed: true,
        tracerColor: "9mm",
        tracerWidth: 0.1,
        tracerLength: 0.8
    },
    bullet_dp28: {
        type: "bullet",
        damage: 14,
        obstacleDamage: 1.5,
        falloff: 0.9,
        distance: 225,
        speed: 110,
        variance: 0,
        shrapnel: false,
        tracerColor: "762mm",
        tracerWidth: 0.1,
        tracerLength: 0.9
    },
    bullet_bar: {
        type: "bullet",
        damage: 17.5,
        obstacleDamage: 1.75,
        falloff: 0.9,
        distance: 275,
        speed: 114,
        variance: 0,
        shrapnel: false,
        tracerColor: "762mm",
        tracerWidth: 0.1,
        tracerLength: 0.9
    },
    bullet_pkp: {
        type: "bullet",
        damage: 18,
        obstacleDamage: 2,
        falloff: 0.9,
        distance: 200,
        speed: 120,
        variance: 0,
        shrapnel: false,
        tracerColor: "762mm",
        tracerWidth: 0.1,
        tracerLength: 0.9
    },
    bullet_glock: {
        type: "bullet",
        damage: 9,
        obstacleDamage: 1,
        falloff: 0.5,
        speed: 70,
        distance: 44,
        variance: 0,
        shrapnel: false,
        tracerColor: "9mm",
        tracerWidth: 0.1,
        tracerLength: 0.7
    },
    bullet_famas: {
        type: "bullet",
        damage: 17,
        obstacleDamage: 1,
        falloff: 0.8,
        distance: 150,
        speed: 110,
        variance: 0,
        shrapnel: false,
        tracerColor: "556mm",
        tracerWidth: 0.1,
        tracerLength: 0.9
    },
    bullet_hk416: {
        type: "bullet",
        damage: 11,
        obstacleDamage: 1,
        falloff: 0.85,
        distance: 175,
        speed: 105,
        variance: 0,
        shrapnel: false,
        tracerColor: "556mm",
        tracerWidth: 0.1,
        tracerLength: 0.9
    },
    bullet_m4a1: {
        type: "bullet",
        damage: 14,
        obstacleDamage: 1,
        falloff: 0.82,
        distance: 165,
        speed: 98,
        variance: 0,
        shrapnel: false,
        suppressed: true,
        tracerColor: "556mm",
        tracerWidth: 0.1,
        tracerLength: 0.9
    },
    bullet_mk12: {
        type: "bullet",
        damage: 22.5,
        obstacleDamage: 1,
        falloff: 0.9,
        distance: 400,
        speed: 132,
        variance: 0,
        shrapnel: false,
        tracerColor: "556mm",
        tracerWidth: 0.1,
        tracerLength: 0.9
    },
    bullet_l86: {
        type: "bullet",
        damage: 26.5,
        obstacleDamage: 1,
        falloff: 0.9,
        distance: 425,
        speed: 134,
        variance: 0,
        shrapnel: false,
        tracerColor: "556mm",
        tracerWidth: 0.1,
        tracerLength: 0.9
    },
    bullet_m249: {
        type: "bullet",
        damage: 14,
        obstacleDamage: 1.75,
        falloff: 0.9,
        distance: 220,
        speed: 125,
        variance: 0,
        shrapnel: false,
        tracerColor: "556mm",
        tracerWidth: 0.1,
        tracerLength: 0.9
    },
    bullet_qbb97: {
        type: "bullet",
        damage: 14,
        obstacleDamage: 1.5,
        falloff: 0.9,
        distance: 200,
        speed: 118,
        variance: 0,
        shrapnel: false,
        tracerColor: "556mm",
        tracerWidth: 0.1,
        tracerLength: 0.9
    },
    bullet_scout: {
        type: "bullet",
        damage: 56,
        obstacleDamage: 1,
        falloff: 0.92,
        distance: 450,
        speed: 164,
        variance: 0,
        shrapnel: false,
        tracerColor: "556mm",
        tracerWidth: 0.14,
        tracerLength: 0.95
    },
    bullet_flare: {
        type: "bullet",
        damage: 0,
        obstacleDamage: 1,
        falloff: 10,
        distance: 16,
        speed: 4,
        variance: 0,
        shrapnel: false,
        tracerColor: "flare",
        tracerWidth: 0.3,
        tracerLength: 1.2,
        flareColor: 16733184,
        addFlare: true,
        maxFlareScale: 2,
        skipCollision: true
    },
    bullet_potato: {
        type: "bullet",
        damage: 0,
        obstacleDamage: 1,
        falloff: 1,
        distance: 1,
        speed: 100,
        variance: 0,
        shrapnel: false,
        tracerColor: "invis",
        tracerWidth: 0,
        tracerLength: 1.2,
        skipCollision: true
    },
    bullet_bugle: {
        type: "bullet",
        damage: 0,
        obstacleDamage: 1,
        falloff: 1,
        distance: 1,
        speed: 100,
        variance: 0,
        shrapnel: false,
        tracerColor: "invis",
        tracerWidth: 0,
        tracerLength: 1.2,
        skipCollision: true
    },
    shrapnel_barrel: {
        type: "bullet",
        damage: 2,
        obstacleDamage: 1,
        falloff: 1,
        speed: 20,
        distance: 8,
        variance: 1.5,
        shrapnel: true,
        tracerColor: "shrapnel",
        tracerWidth: 0.125,
        tracerLength: 0.6
    },
    shrapnel_stove: {
        type: "bullet",
        damage: 5,
        obstacleDamage: 2.5,
        falloff: 1,
        speed: 30,
        distance: 24,
        variance: 1.5,
        shrapnel: true,
        tracerColor: "shrapnel",
        tracerWidth: 0.125,
        tracerLength: 0.6
    },
    shrapnel_frag: {
        type: "bullet",
        damage: 20,
        obstacleDamage: 1,
        falloff: 1,
        speed: 20,
        distance: 8,
        variance: 1.5,
        shrapnel: true,
        tracerColor: "shrapnel",
        tracerWidth: 0.125,
        tracerLength: 0.6
    },
    shrapnel_strobe: {
        type: "bullet",
        damage: 3,
        obstacleDamage: 1,
        falloff: 1,
        speed: 20,
        distance: 3,
        variance: 1.5,
        shrapnel: true,
        tracerColor: "shrapnel",
        tracerWidth: 0.1,
        tracerLength: 0.3
    },
    shrapnel_usas: {
        type: "bullet",
        damage: 5,
        obstacleDamage: 1,
        falloff: 1,
        speed: 20,
        distance: 5,
        variance: 1.2,
        shrapnel: true,
        tracerColor: "shrapnel",
        tracerWidth: 0.1,
        tracerLength: 0.5
    },
    shrapnel_mirv_mini: {
        type: "bullet",
        damage: 6,
        obstacleDamage: 1,
        falloff: 1,
        speed: 20,
        distance: 5,
        variance: 1.3,
        shrapnel: true,
        tracerColor: "shrapnel",
        tracerWidth: 0.1,
        tracerLength: 0.5
    },
    shrapnel_bomb_iron: {
        type: "bullet",
        damage: 10,
        obstacleDamage: 1,
        falloff: 1,
        speed: 24,
        distance: 12,
        variance: 1.5,
        shrapnel: true,
        tracerColor: "shrapnel",
        tracerWidth: 0.125,
        tracerLength: 0.6
    }
};

const SkinDefs: Record<string, BulletDef> = {
    bullet_mp5_bonus: defineBulletSkin("bullet_mp5", {
        speed: 106.25,
        distance: 125
    }),
    bullet_m9_bonus: defineBulletSkin("bullet_m9", {
        speed: 106.25,
        distance: 125
    }),
    bullet_mac10_bonus: defineBulletSkin("bullet_mac10", {
        speed: 93.75,
        distance: 62.5
    }),
    bullet_ump9_bonus: defineBulletSkin("bullet_ump9", {
        speed: 125,
        distance: 125
    }),
    bullet_vector_bonus: defineBulletSkin("bullet_vector", {
        speed: 110,
        distance: 57.5
    }),
    bullet_glock_bonus: defineBulletSkin("bullet_glock", {
        speed: 87.5,
        distance: 55
    }),
    bullet_m93r_bonus: defineBulletSkin("bullet_m93r", {
        speed: 106.25,
        distance: 125
    }),
    bullet_scorpion_bonus: defineBulletSkin("bullet_scorpion", {
        speed: 112.5,
        distance: 150,
        tracerColor: "9mm_suppressed_bonus"
    }),
    bullet_vss_bonus: defineBulletSkin("bullet_vss", {
        speed: 118.75,
        distance: 156.25,
        tracerColor: "9mm_suppressed_bonus"
    }),
    bullet_p30l_bonus: defineBulletSkin("bullet_p30l", {
        speed: 117.5,
        distance: 125
    })
};

export const BulletDefs: Record<string, BulletDef> = { ...BaseDefs, ...SkinDefs };
