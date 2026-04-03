"use client";

import { useState } from "react";
import Image from "next/image";
import Layout from "@/components/layout/Layout";

// Brand data with logos from Rodavigo
interface Brand {
    name: string;
    logo?: string;
}

const brandLogos: Record<string, string> = {
    // A
    "ABB": "https://rodavigo.net/datos/logos-marcas-png/abb.png",
    "ABICOR BINZEL": "https://rodavigo.net/datos/logos-marcas-png/abicor-binzel.png",
    "ABANAKI": "https://rodavigo.net/datos/logos-marcas-png/abanaki.png",
    "ALLEN TEL": "/images/allen-tel-logo.png",
    "ALLEN BRADLEY": "https://rodavigo.net/datos/logos-marcas-png/allen-bradley.png",
    "ALLEN BRADLY": "https://rodavigo.net/datos/logos-marcas-png/allen-bradley.png",
    "APC": "https://rodavigo.net/datos/logos-marcas-png/apc.png",
    "AIR PRODUCTS AND CONTROL INC": "https://rodavigo.net/datos/logos-marcas-png/apc.png",
    "APOLLO": "https://rodavigo.net/datos/logos-marcas-png/apollo.png",
    "ARO": "https://rodavigo.net/datos/logos-marcas-png/aro.png",
    "ASCO": "https://rodavigo.net/datos/logos-marcas-png/asco.png",
    "ASHCROFT": "https://rodavigo.net/datos/logos-marcas-png/ashcroft.png",
    "AERZEN": "https://rodavigo.net/datos/logos-marcas-png/aerzen.png",

    // B
    "BARTEC": "https://rodavigo.net/datos/logos-marcas-png/bartec[1].png",
    "BAUMER": "https://rodavigo.net/datos/logos-marcas-png/baumer.png",
    "BONFIGLIOLI": "https://rodavigo.net/datos/logos-marcas-png/bonfiglioli.png",
    "BITZER": "https://rodavigo.net/datos/logos-marcas-png/bitzer.png",
    "BUHLER": "https://rodavigo.net/datos/logos-marcas-png/buhler.png",
    "Balluff": "https://rodavigo.net/datos/logos-marcas-png/balluff.png",
    "BUSSMAN": "https://rodavigo.net/datos/logos-marcas-png/bussmann.png",
    "BENTLY NEVADA CORP": "https://rodavigo.net/datos/logos-marcas-png/bently-nevada.png",
    "Breco": "https://rodavigo.net/datos/logos-marcas-png/breco.png",
    // C
    "CHINT": "https://rodavigo.net/datos/logos-marcas-png/chint.png",
    "CISCO": "https://rodavigo.net/datos/logos-marcas-png/cisco.png",
    "CATERPILLAR": "https://rodavigo.net/datos/logos-marcas-png/caterpillar.png",
    "CONTRINEX": "https://rodavigo.net/datos/logos-marcas-png/contrinex.png",
    "COPELAND": "https://rodavigo.net/datos/logos-marcas-png/copeland.png",
    "CAREL": "https://rodavigo.net/datos/logos-marcas-png/carel.png",
    "COOPER BUSSMANN": "https://rodavigo.net/datos/logos-marcas-png/cooper-bussmann.png",
    "CONDUCTIX WAMPFLER": "https://rodavigo.net/datos/logos-marcas-png/conductix-wampfler.png",
    // D
    "DANFOSS": "https://rodavigo.net/datos/logos-marcas-png/danfoss.png",
    "DEUBLIN": "https://rodavigo.net/datos/logos-marcas-png/deublin.png",
    "Demag": "https://rodavigo.net/datos/logos-marcas-png/demag.png",
    "DELTA": "https://rodavigo.net/datos/logos-marcas-png/delta.png",

    // E
    "ENDRESS+HAUSER": "https://rodavigo.net/datos/logos-marcas-png/endress-hauser.png",
    "EMERSON": "https://rodavigo.net/datos/logos-marcas-png/emerson.png",
    "EBM-PAPST": "https://rodavigo.net/datos/logos-marcas-png/ebmpapst.png",
    "Eastern Transformers": "https://rodavigo.net/datos/logos-marcas-png/eastern-transformers.png",

    // F
    "FESTO": "https://rodavigo.net/datos/logos-marcas-png/festo.png",
    "FAG": "https://rodavigo.net/datos/logos-marcas-png/fag.png",
    "FLENDER": "https://rodavigo.net/datos/logos-marcas-png/flender.png",
    "FLYGT": "https://rodavigo.net/datos/logos-marcas-png/flygt.png",
    "FERRAZ SHAWMUT": "https://rodavigo.net/datos/logos-marcas-png/ferraz-shawmut.png",

    // G
    "GE": "https://rodavigo.net/datos/logos-marcas-png/general-electric.png",
    "GENERAL ELECTRIC": "https://rodavigo.net/datos/logos-marcas-png/general-electric.png",
    "GRUNDFOS": "https://rodavigo.net/datos/logos-marcas-png/grundfos.png",
    "GEDORE": "https://rodavigo.net/datos/logos-marcas-png/gedore.png",
    "GARLOCK": "https://rodavigo.net/datos/logos-marcas-png/garlock.png",
    "GEMU": "https://rodavigo.net/datos/logos-marcas-png/gemu.png",

    // H
    "HONEYWELL": "https://rodavigo.net/datos/logos-marcas-png/honeywell.png",
    "HYDAC": "https://rodavigo.net/datos/logos-marcas-png/hydac.png",
    "HARTING": "https://rodavigo.net/datos/logos-marcas-png/harting.png",
    "HILTI": "https://rodavigo.net/datos/logos-marcas-png/hilti.png",
    "HAWE Hydraulik": "https://rodavigo.net/datos/logos-marcas-png/hawe.png",
    "Hella": "https://rodavigo.net/datos/logos-marcas-png/hella.png",

    // I
    "IGUS": "https://rodavigo.net/datos/logos-marcas-png/igus.png",
    "INA": "https://rodavigo.net/datos/logos-marcas-png/ina.png",
    "INGERSOLL RAND": "https://rodavigo.net/datos/logos-marcas-png/ingersoll-rand.png",

    // J
    "JCB": "https://rodavigo.net/datos/logos-marcas-png/jcb.png",

    // K
    "KROHNE": "https://rodavigo.net/datos/logos-marcas-png/krohne.png",
    "KSB": "https://rodavigo.net/datos/logos-marcas-png/ksb.png",
    "KTR": "https://rodavigo.net/datos/logos-marcas-png/ktr.png",
    "KEYENCE": "https://rodavigo.net/datos/logos-marcas-png/keyence.png",
    "Kaeser": "https://rodavigo.net/datos/logos-marcas-png/kaeser.png",
    "KUBLER": "https://rodavigo.net/datos/logos-marcas-png/kubler.png",
    "KOLLMORGEN": "https://rodavigo.net/datos/logos-marcas-png/kollmorgen.png",
    "KROMSCHRODER": "https://rodavigo.net/datos/logos-marcas-png/kromschroder.png",
    "KUNKLE": "https://rodavigo.net/datos/logos-marcas-png/kunkle.png",
    "Kraus & Naimer": "https://rodavigo.net/datos/logos-marcas-png/kraus-naimer.png",
    // L
    "LEGRAND": "https://rodavigo.net/datos/logos-marcas-png/legrand.png",
    "LINCOLN": "https://rodavigo.net/datos/logos-marcas-png/lincoln.png",
    "LUMBERG": "https://rodavigo.net/datos/logos-marcas-png/lumberg.png",

    // M
    "METTLER TOLEDO": "https://rodavigo.net/datos/logos-marcas-png/mettler-toledo.png",
    "Mettler-Toledo": "https://rodavigo.net/datos/logos-marcas-png/mettler-toledo.png",
    "MOXA": "https://rodavigo.net/datos/logos-marcas-png/moxa.png",
    "Mitsubishi": "https://rodavigo.net/datos/logos-marcas-png/mitsubishi.png",
    "MEAN WELL": "https://rodavigo.net/datos/logos-marcas-png/mean-well.png",
    "MENNEKES": "https://rodavigo.net/datos/logos-marcas-png/mennekes.png",
    "MAKITA": "https://rodavigo.net/datos/logos-marcas-png/makita.png",
    "MOLEX": "https://rodavigo.net/datos/logos-marcas-png/molex.png",
    "Molex": "https://rodavigo.net/datos/logos-marcas-png/molex.png",
    "MERSEN": "https://rodavigo.net/datos/logos-marcas-png/mersen.png",

    // N
    "NSK": "https://rodavigo.net/datos/logos-marcas-png/nsk-rhp.png",
    "NORGREN": "https://rodavigo.net/datos/logos-marcas-png/imi-norgren.png",
    "Nord": "https://rodavigo.net/datos/logos-marcas-png/nord.png",

    // O
    "OMRON": "https://rodavigo.net/datos/logos-marcas-png/omron.png",

    // P
    "Phoenix": "https://rodavigo.net/datos/logos-marcas-png/phoenix.png",
    "Parker": "https://rodavigo.net/datos/logos-marcas-png/parker.png",
    "PARKER": "https://rodavigo.net/datos/logos-marcas-png/parker.png",
    "PILZ": "https://rodavigo.net/datos/logos-marcas-png/pilz.png",
    "P+F": "https://rodavigo.net/datos/logos-marcas-png/pepperl-fuchs.png",
    "PFANNENBERG": "https://rodavigo.net/datos/logos-marcas-png/pfannenberg.png",

    // R
    "REXROTH BOSCH": "https://rodavigo.net/datos/logos-marcas-png/rexroth-lineal.png",
    "RITTAL": "https://rodavigo.net/datos/logos-marcas-png/rittal.png",
    "ROCKWELL": "https://rodavigo.net/datos/logos-marcas-png/rockwell-automation.png",
    "Renold": "https://rodavigo.net/datos/logos-marcas-png/renold.png",
    "REXNORD": "https://rodavigo.net/datos/logos-marcas-png/rexnord.png",

    // S
    "SCHNEIDER ELECTRIC": "https://rodavigo.net/datos/logos-marcas-png/schneider.png",
    "SICK": "https://rodavigo.net/datos/logos-marcas-png/sick.png",
    "SKF": "https://rodavigo.net/datos/logos-marcas-png/skf.png",
    "SMC": "https://rodavigo.net/datos/logos-marcas-png/smc.png",
    "SIEMENS": "https://rodavigo.net/datos/logos-marcas-png/siemens.png",
    "SQUARE D": "https://rodavigo.net/datos/logos-marcas-png/square-d.png",
    "STAHL": "https://rodavigo.net/datos/logos-marcas-png/stahl.png",
    "SANDVIK": "https://rodavigo.net/datos/logos-marcas-png/sandvik.png",
    "SEW": "https://rodavigo.net/datos/logos-marcas-png/sew-eurodrive.png",
    "SWAGELOK": "https://rodavigo.net/datos/logos-marcas-png/swagelok.png",
    "SCHRACK": "https://rodavigo.net/datos/logos-marcas-png/schrack.png",
    "SOLER Y PALAU": "https://rodavigo.net/datos/logos-marcas-png/soler-palau.png",

    // T
    "TELEMECANIQUE": "https://rodavigo.net/datos/logos-marcas-png/telemecanique.png",
    "TURCK": "https://rodavigo.net/datos/logos-marcas-png/turck.png",
    "TDK LAMBDA": "https://rodavigo.net/datos/logos-marcas-png/tdk-lambda.png",
    "TRICO": "https://rodavigo.net/datos/logos-marcas-png/trico.png",

    // V
    "VEGA": "https://rodavigo.net/datos/logos-marcas-png/vega.png",

    // W
    "WAGO": "https://rodavigo.net/datos/logos-marcas-png/wago.png",
    "WEIDMULLER": "https://rodavigo.net/datos/logos-marcas-png/weidmuller.png",
    "WIKA": "https://rodavigo.net/datos/logos-marcas-png/wika.png",
    "WAM": "https://rodavigo.net/datos/logos-marcas-png/wam.png",

    // Y
    "YASKAWA": "https://rodavigo.net/datos/logos-marcas-png/yaskawa.png",
    "YOKOGAWA": "https://rodavigo.net/datos/logos-marcas-png/yokogawa.png",

    // Z
    "ZIEHL ABEGG": "https://rodavigo.net/datos/logos-marcas-png/ziehl-abegg.png",
};

const allBrands: Brand[] = [
    // A
    { name: "ABB" }, { name: "ABICOR BINZEL" }, { name: "ABANAKI" }, { name: "AEROMECCANICA STRANICH SPA" }, { name: "AERZEN" }, { name: "AFFIX" },
    { name: "ALLEN BRADLY" }, { name: "ALLEN TEL" }, { name: "ALLEN BRADLEY" }, { name: "AMPERES ELECTRONICS" }, { name: "ANAMET" },
    { name: "AIR PRODUCTS AND CONTROL INC" }, { name: "APOLLO" }, { name: "APC" }, { name: "APT" }, { name: "ARCONIC CORPORATION" },
    { name: "ARO" }, { name: "ARPEGE MASTER K" }, { name: "ASCO" }, { name: "ASHCROFT" }, { name: "AVID" },
    // B
    { name: "BARTEC" }, { name: "BDK VALVE" }, { name: "BAUMER" }, { name: "BLACK BOX" }, { name: "BONFIGLIOLI" }, { name: "BRADLEY LIFTING" },
    { name: "BITZER" }, { name: "BUHLER" }, { name: "BUSSMAN" }, { name: "BENTLY NEVADA CORP" }, { name: "Balluff" }, { name: "Belt" }, { name: "BPW" },
    { name: "Braid" }, { name: "Breco" }, { name: "BERNING-MASCHINENFABRIK" },
    // C
    { name: "CB CHINA CHANGSHA PUMP WORKS CO" }, { name: "CHINT" }, { name: "CINTEC HEAVY EQUIPMENT COMPANY" },
    { name: "CEMBRE" }, { name: "CHANGSHA PUMP WORKS CO. LTD" }, { name: "CISCO" }, { name: "CMC PRO" }, { name: "CONDUCTIX WAMPFLER" },
    { name: "CATERPILLAR" }, { name: "CONTRINEX" }, { name: "CRESSALL" }, { name: "COPELAND" }, { name: "CANFIELD" }, { name: "CAREL" }, { name: "CATTRON" },
    { name: "CEFEM" }, { name: "COOPER BUSSMANN" },
    // D
    { name: "DANFOSS" }, { name: "DEUBLIN" }, { name: "Demag" }, { name: "DELTA" },
    // E
    { name: "EBNER" }, { name: "Eastern Transformers" }, { name: "ENDRESS+HAUSER" }, { name: "EMERSON" }, { name: "ENTRELEC" }, { name: "EBM-PAPST" }, { name: "EMG" },
    // F
    { name: "FERRAZ SHAWMUT" }, { name: "FME FANON" }, { name: "FRIGOR TECH" }, { name: "FEAM" }, { name: "FESTO" }, { name: "FAG" }, { name: "FARPOINTE DATA" },
    { name: "Feldbinder" }, { name: "FIPNET" }, { name: "FLENDER" }, { name: "FLYGT" }, { name: "FMIC" }, { name: "FSQ" },
    // G
    { name: "GEDORE" }, { name: "GENERAL" }, { name: "GE" }, { name: "GIOVENZANA" }, { name: "GRUNDFOS" }, { name: "GARLOCK" }, { name: "GENERAL ELECTRIC" },
    { name: "GENERAL MONITORS" }, { name: "GLAMA" }, { name: "GRAINGER" }, { name: "GREENLEE" }, { name: "Gali" }, { name: "GEMU" }, { name: "Grainger" },
    // H
    { name: "HAIER" }, { name: "HERBERT HANCHEN" }, { name: "HOMA" }, { name: "HYUNDAI" }, { name: "HAWE Hydraulik" }, { name: "HBC- RADIOMATIC INTERNATIONAL" },
    { name: "HELUKABEL" }, { name: "HEYPAC" }, { name: "HILTI" }, { name: "HONEYWELL" }, { name: "HYDAC" }, { name: "HYLOC" }, { name: "Hansa-Flex" }, { name: "HARTING" },
    { name: "Hella" }, { name: "HENGST-GEA Delbag GmbH" }, { name: "HONSBERG" }, { name: "Hilco - filter" }, { name: "Hyosung" },
    // I
    { name: "IGUS" }, { name: "INA" }, { name: "INFINITY" }, { name: "INGERSOLL RAND" }, { name: "ISB" }, { name: "Italiana rele" },
    { name: "I SQUARED R ELEMENT CO., INC" }, { name: "Intensiv Filter Himenviro" },
    // J
    { name: "JAMES WALKER" }, { name: "JCB" }, { name: "JOVYATLAS GMBH" },
    // K
    { name: "KLOPPER THERM" }, { name: "KROHNE" }, { name: "KSB" }, { name: "K-TON" }, { name: "KTR" }, { name: "KARL KLEIN" }, { name: "KROMSCHRODER" },
    { name: "KUBLER" }, { name: "KUHNEZUG" }, { name: "KUNKLE" }, { name: "Kaeser" }, { name: "KEMPE" }, { name: "KEYENCE" }, { name: "KOBO" }, { name: "KFNGS" },
    { name: "Kingda" }, { name: "Kraus & Naimer" }, { name: "KOLLMORGEN" }, { name: "KOREA FLUID MACHINERY" },
    // L
    { name: "LUMBERG" }, { name: "LEGRAND" }, { name: "LIYANG GUFENGJI FACTORY" }, { name: "LAIRD-CATTRON" }, { name: "LESER" }, { name: "LINTERN" },
    { name: "LAIRD" }, { name: "LINCOLN" },
    // M
    { name: "METTLER TOLEDO" }, { name: "MAINA ITALY" }, { name: "MARTIN" }, { name: "MAX AIR" }, { name: "MECANINDUS" }, { name: "MECFOR" }, { name: "MAKITA" },
    { name: "Mettler-Toledo" }, { name: "MOXA" }, { name: "MICHAEL RIEDEL" }, { name: "Mitsubishi" }, { name: "MOGENSEN" }, { name: "MOLEX" },
    { name: "MORGAN THERMAL" }, { name: "MEAN WELL" }, { name: "Meriam" }, { name: "MERSEN" }, { name: "MICHIELOTTO" }, { name: "Molex" }, { name: "MP FILTRI" },
    { name: "MPM-MOLEX" }, { name: "MENNEKES" }, { name: "Metal work Co" }, { name: "MECHATHERM" }, { name: "MINIMAX" }, { name: "MAGNALOY" },
    // N
    { name: "NSK" }, { name: "Nord" }, { name: "NORGREN" }, { name: "NUCLEAR INDUSTRY" }, { name: "MURR-ELEKTRONIK" },
    // O
    { name: "OHL INDUSTRIAL MINING" },
    // P
    { name: "Phoenix" }, { name: "P+F" }, { name: "Parker" }, { name: "Parker-Kempe" }, { name: "PAULSTRA" }, { name: "PARKER" }, { name: "PATOL LTD" },
    { name: "PFANNENBERG" }, { name: "POWERSCREEN" }, { name: "PROSOFT TECHNOLOGIES" }, { name: "PROTECTIVE COATING" },
    { name: "Perma" }, { name: "PILLAR INDUCTION" }, { name: "Powerscreen" }, { name: "PRO TECH VALVES" }, { name: "Provo" }, { name: "PILZ" },
    { name: "PANAMETRICS INC" }, { name: "PLATTCO" },
    // R
    { name: "REXROTH BOSCH" }, { name: "RITTAL" }, { name: "ROCKWELL" }, { name: "ROSSEL MESSTECHNIK" }, { name: "ROTEX" }, { name: "RBL" }, { name: "REID" },
    { name: "Renold" }, { name: "REX MATERIALS GROUP" }, { name: "REXNORD" }, { name: "RHP" }, { name: "RENOLD" }, { name: "RONMAS" },
    // S
    { name: "SUNON" }, { name: "SAB BROCKSKES" }, { name: "SCHNEIDER ELECTRIC" }, { name: "SICK" }, { name: "SKF" }, { name: "SKM AIR CONDITIONING" },
    { name: "SMC" }, { name: "SQUARE D" }, { name: "STAHL" }, { name: "SUN HYDRAULICS" }, { name: "SAFERACK" }, { name: "SANDVIK" }, { name: "Sang yong" },
    { name: "SCHENCK INDUSTRIAL" }, { name: "Schroedahl circor" }, { name: "SEAL MASTER" }, { name: "SEW" }, { name: "SHIELD SPRAY" },
    { name: "SHIJAZHUANG KINGDA PUMP INDUSTRY GROUP" }, { name: "SHIN JIN BOLT CO.,LTD" }, { name: "SPECTROMETER" },
    { name: "STRUERS" }, { name: "SWAGELOK" }, { name: "SWIFT HEAT & CONTROL" }, { name: "Sensor Electronic" }, { name: "SHAKO" },
    { name: "SHANGHAI" }, { name: "SHIMADZU CORPORATION" }, { name: "SIEMENS" }, { name: "SOLER Y PALAU" }, { name: "SSI" }, { name: "SCHRACK" }, { name: "SEAGATE" },
    // T
    { name: "TAYAO" }, { name: "TELEMECANIQUE" }, { name: "TEMPORITI" }, { name: "THERMAX" }, { name: "THERMO KINETICS" }, { name: "TLV CO. LTD" },
    { name: "TRIAC" }, { name: "TRICO" }, { name: "TURCK" }, { name: "THERMO FISHER" }, { name: "THERMOPATCH" }, { name: "TORK" }, { name: "Trimble" },
    { name: "TWIFLEX" }, { name: "TECA" }, { name: "TELCO" }, { name: "TDK LAMBDA" }, { name: "TRICONEX" },
    // U
    { name: "UD Truck" }, { name: "UD TRUCKS" }, { name: "UMETA" }, { name: "UNISEARCH ASSOCIATES INC" },
    // V
    { name: "VIKING" }, { name: "VOHOBOO CRANE" }, { name: "VICINAY" }, { name: "VIP AIR EMPOWERMENT" }, { name: "VEGA" }, { name: "VORWALD" },
    { name: "VOSSIOH SCHWABE" },
    // W
    { name: "WAGO" }, { name: "WEIDMULLER" }, { name: "WEISHAUPT" }, { name: "WHEELABRATOR" }, { name: "WIKA" }, { name: "WAM" }, { name: "WANDFLUH" },
    { name: "WESTERN DIGITAL COMPANY" }, { name: "WIEDEMANN" }, { name: "WUXI" }, { name: "WILDEN PUMPS" },
    // X
    { name: "XI AN TECHFULL SIMO MOTOR CO LTD" },
    // Y
    { name: "YASKAWA" }, { name: "YOKOGAWA" }, { name: "YANTAI TONGXING IND CO., LTD" },
    // Z
    { name: "Zhangjiagang" }, { name: "ZIEHL ABEGG" },
].map(brand => ({
    ...brand,
    logo: brandLogos[brand.name]
}));

const alphabet = ["0-9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Brand Card Component
function BrandCard({ brand }: { brand: Brand }) {
    const [imageError, setImageError] = useState(false);

    return (
        <div className="group flex items-center gap-4 p-4 bg-white rounded-lg border border-gray-200 hover:border-primary/50 hover:shadow-lg transition-all duration-300">
            {/* Logo Container - Left Side */}
            <div className="w-16 h-16 flex-shrink-0 flex items-center justify-center">
                {brand.logo && !imageError ? (
                    <Image
                        src={brand.logo}
                        alt={`${brand.name} logo`}
                        width={64}
                        height={64}
                        className="max-w-full max-h-full object-contain group-hover:scale-125 transition-transform duration-300"
                        unoptimized
                        onError={() => setImageError(true)}
                    />
                ) : (
                    <div className="w-2 h-2 rounded-full bg-gray-400 group-hover:bg-primary group-hover:scale-150 transition-all duration-300" />
                )}
            </div>

            {/* Brand Name - Right Side */}
            <span className="text-base text-gray-900 font-semibold flex-1">
                {brand.name}
            </span>
        </div>
    );
}

export default function BrandsPage() {
    const [selectedLetter, setSelectedLetter] = useState<string>("A");

    const getFilteredBrands = () => {
        if (selectedLetter === "0-9") {
            return allBrands.filter((brand) => /^[0-9]/.test(brand.name));
        }
        return allBrands.filter((brand) =>
            brand.name.toUpperCase().startsWith(selectedLetter)
        ).sort((a, b) => a.name.localeCompare(b.name));
    };

    const filteredBrands = getFilteredBrands();

    return (
        <Layout>
            {/* Hero Section */}
            <section className="relative bg-primary py-20 md:py-28">
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-olive-dark" />
                <div className="container-custom relative z-10">
                    <div className="max-w-3xl animate-slide-up">
                        <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-6">
                            Our Brands
                        </h1>
                        <p className="text-xl text-primary-foreground/80">
                            We partner with leading global manufacturers to bring you the best industrial products.
                        </p>
                    </div>
                </div>
            </section>

            {/* Brands Section */}
            <section className="section-padding bg-background">
                <div className="container-custom">
                    {/* Alphabet Filter */}
                    <div className="mb-10 overflow-x-auto pb-2">
                        <div className="flex gap-1 min-w-max">
                            {alphabet.map((letter) => (
                                <button
                                    key={letter}
                                    onClick={() => setSelectedLetter(letter)}
                                    className={`w-10 h-10 flex items-center justify-center rounded-md font-heading font-semibold text-sm transition-all duration-200 ${selectedLetter === letter
                                        ? "bg-primary text-primary-foreground shadow-md"
                                        : "bg-muted text-foreground hover:bg-primary/10"
                                        }`}
                                >
                                    {letter}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Selected Letter Title */}
                    <div className="mb-8">
                        <h2 className="text-2xl font-heading font-bold text-foreground">
                            Brands starting with &quot;{selectedLetter}&quot;
                        </h2>
                        <p className="text-muted-foreground mt-1">
                            {filteredBrands.length} brand{filteredBrands.length !== 1 ? "s" : ""} found
                        </p>
                    </div>

                    {/* Brands Grid */}
                    {filteredBrands.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                            {filteredBrands.map((brand, index) => (
                                <BrandCard key={`${brand.name}-${index}`} brand={brand} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-16">
                            <p className="text-muted-foreground text-lg">
                                No brands found starting with &quot;{selectedLetter}&quot;
                            </p>
                        </div>
                    )}

                    {/* Additional Info */}
                    <div className="mt-16 p-8 bg-muted rounded-2xl text-center">
                        <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                            & Many More...
                        </h3>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            We continuously expand our network of trusted brand partners. If you&apos;re looking for
                            a specific brand not listed here, please contact us and we&apos;ll be happy to assist.
                        </p>
                    </div>
                </div>
            </section>
        </Layout>
    );
}
