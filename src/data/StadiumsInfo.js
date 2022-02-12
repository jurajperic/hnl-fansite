const stadiumsInfo =[
    {
        name:"Stadion Maksimir",
        image:"https://smimgs.com/images/stadium/360.jpg",
        id:'maksimir',
        capacity:35123,
        terrain:'Hibridni travnjak',
        about:'Stadion Maksimir je nogometni stadion u Zagrebu. Smješten je u istočnom dijelu grada, nasuprot parka Maksimira. Službeno je otvoren 5. svibnja 1912. godine. Preuređivan je nekoliko puta. Na stadionu utakmice igraju GNK Dinamo i Hrvatska nogometna reprezentacija.',
        background:"http://gnkdinamo.hr/Repository/2016/9/avion4.jpg"
    },
    {
        name:"Gradski stadion Velika Gorica",
        image:"http://srcvg.hr/wp-content/uploads/2017/10/Gradski-stadion-Velika-Gorica-55-1024x683-320x240.jpg",
        id:'gradski-velika-gorica',
        capacity:6000,
        terrain:'Trava',
        about:'Gradski stadion Velika Gorica izgrađen je 1987. napravljen za potrebe Univerzijade. Otvorenje stadiona bilo je 30. lipnja 1987. godine, Radnik je igrao protiv studentske reprezentacije Jugoslavije. Na utakmici je bilo 10.000 gledatelja. Na Univerzijadi je pet utakmica odigrano u Velikoj Gorici, počevši s visokih 6-0 SSSR-a protiv Brazila, pred 8.000 gledatelja. A kad je parada prošla, Velikoj Gorici ostao je stadion.',
        background:"https://www.mbplan.hr/wp-content/uploads/2017/05/Stadion-HNK-Gorica.jpg"
    },
    {
        name:"Gradski stadion Poljud",
        image:"http://stadiumdb.com/pictures/stadiums/cro/stadion_poljud/stadion_poljud05.jpg",
        id:'poljud',
        capacity:35000,
        terrain:'Hibridni travnjak',
        about:'Gradski stadion Poljud, poznat pod nadimkom Poljudska ljepotica, nalazi se u splitskoj četvrti Poljudu na sjeverozapadu grada, na mjestu gdje je nekad bilo ljekovito blato. Izgrađen je 1979. godine u sklopu izgradnje športskih objekata 8. Mediteranskih igara.Autor projekta je istaknuti riječki arhitekt dr. Boris Magaš. Nakon münchenskog Olimpijskog stadiona, izazvao je najviše pozornosti stručne javnosti na polju športske arhitekture.',
        background:"https://hajduk.hr/sadrzaj/stadion/poljud-iz-zraka.jpg"
    },
    {
        name:"Stadion Aldo Drosina",
        image:"https://smimgs.com/images/stadium/2097.jpg",
        id:'aldo-drosina',
        capacity:9000,
        terrain:'Hibridni travnjak',
        about:'Stadion Aldo Drosina je gradski stadion u Puli. Nazvan je po legendarnom pulskom nogometašu i treneru Aldu Drosini. Na njemu svoje domaće utakmice igra NK Istra 1961 i NK Istra Pula. Dana 16. veljače 2009. potpisan je ugovor za njegovu obnovu,[1] kako bi udovoljavao svim HNS-ovim i UEFA-inim kriterijima. Također su postavljeni reflektori koji omogućuju odigravanje noćnih utakmica te semafor s videozidom, te će na njemu će moći igrati i hrvatska nogometna reprezentacija.',
        background:"https://sport.ghia.hr/wp-content/uploads/2012/09/16.jpg"
    },
    {
        name:"Stadion Kranjčevićeva",
        image:"https://smimgs.com/images/stadium/910_1278495261.jpg",
        id:'kranjceviceva',
        capacity:8850,
        terrain:'Hibridni travnjak',
        about:'Stadion Kranjčevićeva (prije Stadion Concordije) nogometni je stadion u Zagrebu. Smješten je u Kranjčevićevoj ulici na Trešnjevci. Na stadionu nastupaju NK Lokomotiva Zagreb i NK Hrvatski dragovoljac a prije Drugog svjetskog rata nastupala HŠK Concordia. Nakon što je 10. listopada 1946. formirano Fiskulturno društvo Zagreb, vlasti su mu dale na upravljanje stadion kojim je do kraja 2. svjetskog rata upravljala HŠK Concordia.',
        background:"https://static.jutarnji.hr/images/live-multimedia/binary/2019/5/17/17/travnjak_kranjceviceva06-210918.jpg"
    },
    {
        name:"Stadion Rujevica",
        image:"http://stadiumdb.com/pictures/stadiums/cro/stadion_rujevica_rijeka/stadion_rujevica_rijeka24.jpg",
        id:'rujevica',
        capacity:8279,
        terrain:'Hibridni travnjak',
        about:'Izgradnja koju plaća vlasnik HNK Rijeka započela je 15. rujna 2014. Izgrađene su tada zapadna glavna koja je potpuno pokrivena krovom i istočna tribina, dok se sa sjeverne strane nalazilo brdo, a s južne jedna manja tribina s nekoliko redova, ostali tereni kompleksa i pogled na otvoreno more. Stadion je dobio licenciju 28. srpnja 2015., a službeno je otvoren 2. kolovoza 2015. ligaškim ogledom protiv zagrebačke Lokomotive koji je HNK Rijeka dobila rezultatom 3:1.',
        background:"https://sportklub.hr/wp-content/uploads/2019/01/stadion-rujevica-87383-1200x720.jpeg"
    },
    {
        name:"Gradski stadion Koprivnica",
        image:"https://footballtripper.com/wp-content/uploads/gradski-stadion-koprivnica-west-stand.jpg",
        id:'gradski-koprivnica',
        capacity:3134,
        terrain:'Hibridni travnjak',
        about:'Stadion poznat još pod nazivom Ivan Kušek Apaš. Jedina, zapadna tribina stadiona izgrađena je 1996. godine. Fazna izgradnja je nastavljena, pa su 2006. u sklopu druge faze radova završeni upravni uredi i VIP salon. U budućnosti je planirana i treća faza u sklopu koje bi trebala biti izgrađena poslovno-stambena zgrada uz zapadnu tribinu, mjesta u gledalištu za novinare i važnije goste te natkrivanje cijele zapadne tribine, koja je trenutačno natkrivena tek djelomično.',
        background:"https://nk-slaven-belupo.hr/wp-content/uploads/2015/01/KROV-1024x531.jpg"
        
    },
    {
        name:"Stadion Gradski Vrt",
        image:"http://stadiumdb.com/pictures/stadiums/cro/stadion_gradski/stadion_gradski09.jpg",
        id:'gradski-vrt',
        capacity:18856,
        terrain:'Trava',
        about:'Svoj današnji oblik stadion je počeo dobivati 1977. godine. Tada su bijelo-plavi osigurali ulazak u prvu jugoslavensku ligu, a budući da se i za susrete nižeg stupnja natjecanja tražila ulaznica više, grad Osijek je dao podršku i krenulo se u izgradnju novog stadiona na mjestu postojećeg. Zapravo, može se reći da su istočna i donja zapadna tribina doživjele svojevrsnu rekonstrukciju, dok je novitet postala velika gornja zapadna tribina. Tijekom iduće dvije sezone ona je bila pravo gradilište, pa je tako izgledala i za vrijeme odigravanja susreta, a iako nikad dovršena, za gledatelje je otvorena 1979. godine.',
        background:"https://nk-osijek.hr/files/images/_resized/0000016970_1050_624_cut.png"
    },
    {
        name:"Stadion Šubićevac",
        image:"https://static.jutarnji.hr/images/slike/2020/09/02/o_5375067_1280.jpg",
        id:'subicevac',
        capacity:3412,
        terrain:'Trava',
        about:'Stadion Šubićevac višenamjenski je stadion smješten u Šibeniku. Svoje domaće utakmice na njemu odigrava HNK Šibenik. Kapacitet stadiona iznosi 3.412 sjedećih mjesta.Gradio se od 1946. do 1948. godine u gradskoj četvrti Šubićevac. Službeno je otvoren 1. svibnja 1948. pod imenom Stadion Rade Končar.Godine 2016., odmah uz stadion, izgrađeno je i igralište s umjetnom travom.',
        background:"https://hnk-sibenik.hr/wp/wp-content/uploads/2021/05/20200801_114224-01-min-900x325.jpeg"
    },
    {
        name:"Pampas Arena",
        image:"https://www.sirrah.hr/wp-content/uploads/2020/08/Pampas-Sirrah_3.jpg",
        id:'pampas',
        capacity:12850,
        terrain:'Hibridna trava',
        about:'Stadion Pampas nogometni je stadion u Osijeku, čija je izgradnja u tijeku. Nalazi se na predjelu Pampas, na području Retfale, u zapadnom dijelu grada. Projekt je predstavljen dana 19. travnja 2018., a osim stadiona podrazumijeva i izgradnju nogometnog kampa sa 7 terena. Radovi na izgradnji počeli su nedugo nakon predstavljanja raščišćavanjem i pripremom zemljišta te nasipavanjem zemlje i kamenja.',
        background:"https://upload.wikimedia.org/wikipedia/commons/d/da/Stadion_Pampas_prosinac_2020.jpg"
    },
]

export default stadiumsInfo