export class MemberState {

    static readonly BELGIUM = new MemberState('Belgium', 11413058);

    static memberStates: MemberState[] = [
        MemberState.BELGIUM,
        new MemberState('Bulgária', 7050034),
        new MemberState('Csehország', 10610055),
        new MemberState('Dánia', 5781190),
        new MemberState('Németország', 82850000),
        new MemberState('Észtország', 1319133),
        new MemberState('Írország', 4838259),
        new MemberState('Görögország', 10738868),
        new MemberState('Spanyolország', 46659302),
        new MemberState('Franciaország', 67221943),
        new MemberState('Horvátország', 4105493),
        new MemberState('Olaszország', 60483973),
        new MemberState('Ciprus', 864236),
        new MemberState('Lettország', 1934379),
        new MemberState('Litvánia', 2808901),
        new MemberState('Luxemburg', 602005),
        new MemberState('Magyarország', 9778371),
        new MemberState('Málta', 475701),
        new MemberState('Hollandia', 17181084),
        new MemberState('Ausztria', 8822267),
        new MemberState('Lengyelország', 37976687),
        new MemberState('Portugália', 10291027),
        new MemberState('Románia', 19523621),
        new MemberState('Szlovénia', 2066880),
        new MemberState('Szlovákia', 5443120),
        new MemberState('Finnország', 5513130),
        new MemberState('Svédország', 10120242),
        new MemberState('Egyesült Királyság', 66238007)
      ];

    name: string;
    population: number;

    constructor(name: string, population: number) {
        this.name = name;
        this.population = population;
    }
}
