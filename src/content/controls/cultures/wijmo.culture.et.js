﻿/*
    *
    * Wijmo Library 5.20183.567
    * http://wijmo.com/
    *
    * Copyright(c) GrapeCity, Inc.  All rights reserved.
    *
    * Licensed under the GrapeCity Commercial License.
    * sales@wijmo.com
    * wijmo.com/products/wijmo-5/license/
    *
    */
/*
 * Wijmo culture file: et (Estonian)
 */
var wijmo;
(function (wijmo) {
    // process the scenario where "wijmo" !== "window['wijmo']", for example when culture file is loaded
    // using 'import' statement in a WebPack bundled app, where "wijmo" will be local to this module.
    if (!window['wijmo']) {
        window['wijmo'] = wijmo;
    }
    wijmo.culture = window['wijmo'].culture = {
        Globalize: {
            name: 'et',
            displayName: 'Estonian',
            numberFormat: {
                '.': ',',
                ',': ' ',
                '-': '-',
                '+': '+',
                '%': '%',
                percent: { pattern: ['-n%', 'n%'] },
                currency: { decimals: 2, symbol: '€', pattern: ['-n $', 'n $'] }
            },
            calendar: {
                '/': '.',
                ':': ':',
                firstDay: 1,
                days: ['pühapäev', 'esmaspäev', 'teisipäev', 'kolmapäev', 'neljapäev', 'reede', 'laupäev'],
                daysAbbr: ['P', 'E', 'T', 'K', 'N', 'R', 'L'],
                months: ['jaanuar', 'veebruar', 'märts', 'aprill', 'mai', 'juuni', 'juuli', 'august', 'september', 'oktoober', 'november', 'detsember'],
                monthsAbbr: ['jaan', 'veebr', 'märts', 'apr', 'mai', 'juuni', 'juuli', 'aug', 'sept', 'okt', 'nov', 'dets'],
                am: ['AM', 'A'],
                pm: ['PM', 'P'],
                eras: ['pKr'],
                patterns: {
                    d: 'dd.MM.yyyy', D: 'dddd, d. MMMM yyyy',
                    f: 'dddd, d. MMMM yyyy HH:mm', F: 'dddd, d. MMMM yyyy HH:mm:ss',
                    t: 'HH:mm', T: 'HH:mm:ss',
                    m: 'd. MMMM', M: 'd. MMMM',
                    y: 'MMMM yyyy', Y: 'MMMM yyyy',
                    g: 'dd.MM.yyyy HH:mm', G: 'dd.MM.yyyy HH:mm:ss',
                    s: 'yyyy"-"MM"-"dd"T"HH":"mm":"ss'
                },
                fiscalYearOffsets: [-3, -3]
            }
        },
        Licensing: {
            cls: 'CLOSE',
            ctc: 'Võtke ühendust GrapeCity: <a href="mailto:us.sales@grapecity.com">us.sales@grapecity.com</a>.',
            dmn: 'Wijmo litsentsi selles rakenduses ei sobi praeguses domeenis. Litsentsi valdkond on <b>{licDomain}</b>, praeguses domeenis on <b>{domain}</b>.',
            evl: 'Wijmo hindamine versioon ({version})',
            exp: 'Selles rakenduses Wijmo litsents on aegunud. Litsents kehtib kuni kuupäev on <b>{expDate:d}</b>.',
            hdr: 'Wijmo litsents',
            lic: 'Selles rakenduses Wijmo litsents on kehtetu.',
            mss: 'Wijmo litsentsi käesolevas taotluses on esitatud.',
            prd: 'Wijmo litsentsi selles rakenduses ei sobi <b>{control}</b> kontrolli.',
            ver: 'Selles rakenduses Wijmo litsents ei ole kehtiv versioon kasutusel. Litsentsi versioon <b>{licVer}</b>; toote versioon on  <b>{version}</b>.'
        },
        Calendar: {
            ariaLabels: {
                calendar: 'Kalender',
                monthView: 'Kuuvaade',
                yearView: 'Aastavaade',
                prvMo: 'Eelmine kuu',
                today: 'Täna',
                nxtMo: 'Järgmine kuu',
                prvYr: 'Eelmine aasta',
                currMo: 'Jooksev kuu',
                nxtYr: 'Järgmine aasta',
            }
        },
        DropDown: {
            ariaLabels: {
                tgl: 'Lülita avatavad'
            }
        },
        FlexGrid: {
            groupHeaderFormat: '{name}:  <b> {value} </b>  ({count:n0} kirjed)',
            ariaLabels: {
                toggleDropDown: 'Lülita avatavad',
                toggleGroup: 'Lülita rühma'
            }
        },
        FlexGridDetailProvider: {
            ariaLabels: {
                toggleDetail: 'Lülita rea Detail'
            }
        },
        FlexGridFilter: {
            // aria labels
            ariaLabels: {
                edit: 'Redigeeri filtrit veergu',
                dialog: 'Filter toimetaja veerg',
                asc: 'Veeru sortimine tõusvas järjestuses',
                dsc: 'Veeru sortimine laskuvas järjestuses',
                search: 'Otsi kaupade loend',
                op1: 'Esimese tingimuse tehtemärk',
                val1: 'Esimene tingimus väärtus',
                and: 'Mõlemad tingimused nõuavad',
                or: 'Nõuda nende tingimuste',
                op2: 'Teise tingimuse tehtemärk',
                val2: 'Teine tingimus väärtus'
            },
            // filter
            ascending: '\u2191 Tõusev järjestus',
            descending: '\u2193 Laskuv järjestus',
            apply: 'Rakenda',
            cancel: 'Loobu',
            clear: 'Tühjenda',
            conditions: 'Filtreeri tingimus',
            values: 'Filtreeri hinna järgi',
            // value filter
            search: 'Otsi',
            selectAll: 'Vali kõik',
            null: '(midagi)',
            // condition filter
            header: 'Kuva üksused, kus väärtus',
            and: 'ja',
            or: 'Või',
            stringOperators: [
                { name: '(määramata)', op: null },
                { name: 'Võrdub', op: 0 },
                { name: 'Ei võrdu', op: 1 },
                { name: 'Algab', op: 6 },
                { name: 'Lõpeb väärtusega', op: 7 },
                { name: 'Sisaldab', op: 8 },
                { name: 'Ei sisalda', op: 9 }
            ],
            numberOperators: [
                { name: '(määramata)', op: null },
                { name: 'Võrdub', op: 0 },
                { name: 'Ei võrdu', op: 1 },
                { name: 'On suurem kui', op: 2 },
                { name: 'On suurem või võrdne', op: 3 },
                { name: 'On väiksem kui', op: 4 },
                { name: 'On väiksem või võrdne', op: 5 }
            ],
            dateOperators: [
                { name: '(määramata)', op: null },
                { name: 'Võrdub', op: 0 },
                { name: 'on enne', op: 4 },
                { name: 'on pärast', op: 2 }
            ],
            booleanOperators: [
                { name: '(määramata)', op: null },
                { name: 'Võrdub', op: 0 },
                { name: 'Ei võrdu', op: 1 }
            ]
        },
        InputDateTime: {
            ariaLabels: {
                tglDate: 'Lülita kalender',
                tglTime: 'Lülita aeg loend'
            }
        },
        InputNumber: {
            ariaLabels: {
                incVal: 'Suurendage väärtust',
                decVal: 'Vähendage väärtust'
            }
        },
        MultiSelect: {
            itemsSelected: '{count:n0} üksust',
            selectAll: 'Vali kõik'
        },
        olap: {
            PivotFieldEditor: {
                dialogHeader: 'Sätted:',
                header: 'Päis:',
                summary: 'Kokkuvõte:',
                showAs: 'Kuva kui:',
                weighBy: 'Kaalutakse poolt:',
                sort: 'Sorteeri:',
                filter: 'Filter:',
                format: 'Formaat:',
                sample: 'Proovi:',
                edit: 'Redigeerimine…',
                clear: 'Tühjenda',
                ok: 'OK',
                cancel: 'Loobu',
                none: '(pole)',
                sorts: {
                    asc: 'Tõusev järjestus',
                    desc: 'Laskuv järjestus'
                },
                aggs: {
                    sum: 'Summa',
                    cnt: 'Arv',
                    avg: 'Keskmine',
                    max: 'MAX',
                    min: 'MIN',
                    rng: 'Vahemik',
                    std: 'Standardhälve',
                    var: 'VAR',
                    stdp: 'StdDevPop',
                    varp: 'VarPop',
                    first: 'Esimene',
                    last: 'Last'
                },
                calcs: {
                    noCalc: 'Arvutuseta',
                    dRow: 'Erinevus eelmise rea',
                    dRowPct: '% Erinevus eelmise rea',
                    dCol: 'Erinevus eelmise veeru',
                    dColPct: 'Erinevus eelmise veeru %',
                    dPctGrand: '% kogusummast',
                    dPctRow: '% reast kokku',
                    dPctCol: '% veerg kokku',
                    dRunTot: 'Jooksev kogusumma',
                    dRunTotPct: '% töötab kokku'
                },
                formats: {
                    n0: 'Täisarv (n0)',
                    n2: 'Float (n2)',
                    c: 'Valuuta (c)',
                    p0: 'Protsent (p0)',
                    p2: 'Protsent (p2)',
                    n2c: 'Tuhat (n2)',
                    n2cc: 'Miljoneid (n2)',
                    n2ccc: 'Miljardid (n2,,,)',
                    d: 'Kuupäev (d)',
                    MMMMddyyyy: 'Kuu aasta päev (MMMM dd, aasta)',
                    dMyy: 'Päev kuu aasta (d/M/AA)',
                    ddMyy: 'Päev kuu aasta (PP/M/AA)',
                    dMyyyy: 'Päev kuu aasta (PP/M/aaaa)',
                    MMMyyyy: 'Kuu aasta (MMM yyyy)',
                    MMMMyyyy: 'Kuu aasta (MMMM aasta)',
                    yyyyQq: 'Aasta kvartalis (aaaa "Q" q)',
                    FYEEEEQU: 'Finantsaasta kvartal ("Lt" EEEE "Q" U)'
                }
            },
            PivotEngine: {
                grandTotal: 'Üldsumma',
                subTotal: 'Vahesumma'
            },
            PivotPanel: {
                fields: 'Valige aruandesse lisatavad väljad:',
                drag: 'Lohistage välju järgmistel aladel:',
                filters: 'Filtrid',
                cols: 'Veerud',
                rows: 'Read',
                vals: 'väärtust',
                defer: 'Lükata uuendused',
                update: 'Värskenda'
            },
            _ListContextMenu: {
                up: 'Nihuta üles',
                down: 'Nihuta alla',
                first: 'Nihuta algusse',
                last: 'Nihuta lõppu',
                filter: 'Teisalda aruandefiltrisse',
                rows: 'Teisalda reasiltide hulka',
                cols: 'Teisalda veerusiltide hulka',
                vals: 'Teisalda väärtuste hulka',
                remove: 'Eemalda väli',
                edit: 'Väljasätted…',
                detail: 'Detailsed…'
            },
            PivotChart: {
                by: '–',
                and: 'kuni'
            },
            DetailDialog: {
                header: 'Detailne vaade:',
                ok: 'OK',
                items: '{cnt:n0} üksused',
                item: '{cnt} üksust',
                row: 'Rida',
                col: 'Veerg'
            },
            Slicer: {
                multiSelect: 'Mitme valimine',
                clearFilter: 'Puhasta filter'
            }
        },
        Viewer: {
            cancel: 'Loobu',
            ok: 'OK',
            bottom: 'Alumine:',
            top: 'Ülemine:',
            right: 'Paremalt:',
            left: 'Vasakult:',
            margins: 'Veerised (tollid)',
            orientation: 'Suund:',
            paperKind: 'Raamatu liik:',
            pageSetup: 'Lehekülje häälestus',
            landscape: 'Horisontaalpaigutus',
            portrait: 'Vertikaalpaigutus',
            pageNumber: 'Leheküljenumber',
            zoomFactor: 'Suurenduskordaja',
            paginated: 'Küljendivaade',
            print: 'Printimine',
            search: 'Otsi',
            matchCase: 'Erista suurtähti',
            wholeWord: 'Otsi ainult terveid sõnu',
            searchResults: 'Otsingutulemid',
            previousPage: 'Eelmine leht',
            nextPage: 'Järgmine leht',
            firstPage: 'Esimene leht',
            lastPage: 'Viimane leht',
            backwardHistory: 'Tagasi',
            forwardHistory: 'Edasi',
            pageCount: 'Lehtede arv',
            selectTool: 'Valige tööriist',
            moveTool: 'Move tööriista',
            continuousMode: 'Pidev lehekülje kaupa',
            singleMode: 'Ühe lehekülje kaupa',
            wholePage: 'Mahuta kogu lehele',
            pageWidth: 'Lehe laiuse järgi',
            zoomOut: 'Vähenda',
            zoomIn: 'Suurenda',
            rubberbandTool: 'Zoom by valik',
            magnifierTool: 'Luup',
            rotatePage: 'Pööra Page',
            rotateDocument: 'Pööra dokument',
            exports: 'Ekspordi',
            fullScreen: 'Täisekraan',
            exitFullScreen: 'Välju täisekraani režiimist',
            hamburgerMenu: 'Tööriistad',
            showSearchBar: 'Kuva otsinguriba',
            viewMenu: 'Paigutuse suvandid',
            searchOptions: 'Otsingusuvandid',
            matchCaseMenuItem: 'Erista suurtähti',
            wholeWordMenuItem: 'Otsi terveid sõnu',
            thumbnails: 'Lehekülje pisipildid',
            outlines: 'Dokumendiplaan',
            loading: 'Laadimine…',
            pdfExportName: 'Adobe PDF',
            docxExportName: 'Open XML-i sõna',
            xlsxExportName: 'Exceli avatud XML',
            docExportName: 'Microsoft Word',
            xlsExportName: 'Microsoft Excel',
            mhtmlExportName: 'Veebiarhiiv (MHTML)',
            htmlExportName: 'HTML-dokument',
            rtfExportName: 'RTF-dokument',
            metafileExportName: 'Tihendatud metafailid',
            csvExportName: 'CSV',
            tiffExportName: 'TIFF-pilte',
            bmpExportName: 'BMP pildid',
            emfExportName: 'Laiendatud metafail',
            gifExportName: 'Pildid',
            jpgExportName: 'JPEG-pilte',
            jpegExportName: 'JPEG-pilte',
            pngExportName: 'PNG pilt',
            abstractMethodException: 'See on abstraktne meetod, palun rakendada.',
            cannotRenderPageNoViewPage: 'Ei saa muuta ilma dokumendi ja Vaata lehekülje.',
            cannotRenderPageNoDoc: 'Ei saa muuta ilma dokumendi ja Vaata lehekülje.',
            exportFormat: 'Eksport Formaat:',
            exportOptionTitle: 'Ekspordisuvandid',
            documentRestrictionsGroup: 'Dokumendi piirangud',
            passwordSecurityGroup: 'Parooli turvalisus',
            outputRangeGroup: 'Väljundvahemik',
            documentInfoGroup: 'Dokumendi info',
            generalGroup: 'Üldist',
            docInfoTitle: 'Pealkiri',
            docInfoAuthor: 'Autor',
            docInfoManager: 'Haldur',
            docInfoOperator: 'Tehtemärk',
            docInfoCompany: 'Ettevõte',
            docInfoSubject: 'Subject',
            docInfoComment: 'Kommentaar',
            docInfoCreator: 'Looja',
            docInfoProducer: 'Produtsent',
            docInfoCreationTime: 'Loomise ajal',
            docInfoRevisionTime: 'Aja muutmise',
            docInfoKeywords: 'Võtmesõnad',
            embedFonts: 'Manusta TrueType-fondid',
            pdfACompatible: 'PDF/A ühilduv (tase 2B)',
            useCompression: 'Kasuta tihendust',
            useOutlines: 'Luua kontuurid',
            allowCopyContent: 'Sisu kopeerimine või kaevandamine',
            allowEditAnnotations: 'Annotatsioon redigeerimine',
            allowEditContent: 'Sisu redigeerimine',
            allowPrint: 'Luba printimine',
            ownerPassword: '(Omanik) õiguste parooli:',
            userPassword: 'Dokumendi avamine (kasutaja) parool:',
            encryptionType: 'Krüptimise taseme:',
            paged: 'Saalitud',
            showNavigator: 'Näita Navigator',
            navigatorPosition: 'Navigator Positsioon',
            singleFile: 'Ühe faili',
            tolerance: 'Sallivus kui avastada teksti piire (punktid):',
            pictureLayer: 'Kasutamiseks eraldi pildi kiht',
            metafileType: 'Metafaili tüüp:',
            monochrome: 'Ühevärviline',
            resolution: 'Eraldusvõime:',
            outputRange: 'Lehevahemik:',
            outputRangeInverted: 'Tagurpidi',
            showZoomBar: 'Suumimise riba',
            searchPrev: 'Otsi eelmine',
            searchNext: 'Otsi järgmine',
            checkMark: '\u2713',
            exportOk: 'Ekspordi…',
            cannotSearch: 'Otsi nõuab dokumendi allikas selgitamisel.',
            parameters: 'Parameetrid',
            requiringParameters: 'Sisestage parameetrid.',
            nullParameterError: 'Väärtus ei tohi olla nullväärtusega.',
            invalidParameterError: 'Sisestatud väärtused ei sobi.',
            parameterNoneItemsSelected: '(pole)',
            parameterAllItemsSelected: '(kõik)',
            parameterSelectAllItemText: '(Vali kõik)',
            selectParameterValue: '(valige väärtus)',
            apply: 'Rakenda',
            errorOccured: 'Ilmnes tõrge.'
        },
        FlexSheet: {
            insertRow: 'Sisesta rida',
            deleteRow: 'Kustuta rida',
            insertCol: 'Lisa veerg',
            deleteCol: 'Delete Column',
            convertTable: 'Teisenda tabel',
            copyCells: 'Lahtrite kopeerimine',
            fillSeries: 'Täida sari',
            fillFormat: 'Täida ainult vorminguga',
            fillWithoutFormat: 'Täida vorminguta'
        }
    };
    var updc = window['wijmo']._updateCulture;
    if (updc) {
        updc();
    }
})(wijmo || (wijmo = {}));
;

