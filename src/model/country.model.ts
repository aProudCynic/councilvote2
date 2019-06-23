export class MemberState {

    static readonly BELGIUM = new MemberState('Belgium', 11413058);
    static readonly BULGARIA = new MemberState('Bulgária', 7050034);
    static readonly CZECH_REPUBLIC = new MemberState('Csehország', 10610055);
    static readonly DENMARK = new MemberState('Dánia', 5781190);
    static readonly GERMANY = new MemberState('Németország', 82850000);
    static readonly ESTONIA = new MemberState('Észtország', 1319133);
    static readonly IRELAND = new MemberState('Írország', 4838259);
    static readonly GREECE = new MemberState('Görögország', 10738868);
    static readonly SPAIN = new MemberState('Spanyolország', 46659302);
    static readonly FRANCE = new MemberState('Franciaország', 67221943);
    static readonly CROATIA = new MemberState('Horvátország', 4105493);
    static readonly ITALY = new MemberState('Olaszország', 60483973);
    static readonly CYPRUS = new MemberState('Ciprus', 864236);
    static readonly LATVIA = new MemberState('Lettország', 1934379);
    static readonly LITHUANIA = new MemberState('Litvánia', 2808901);
    static readonly LUXEMBOURG = new MemberState('Luxemburg', 602005);
    static readonly HUNGARY = new MemberState('Magyarország', 9778371);
    static readonly MALTA = new MemberState('Málta', 475701);
    static readonly THE_NETHERLANDS = new MemberState('Hollandia', 17181084);
    static readonly AUSTRIA = new MemberState('Ausztria', 8822267);
    static readonly POLAND = new MemberState('Lengyelország', 37976687);
    static readonly PORTUGAL = new MemberState('Portugália', 10291027);
    static readonly ROMANIA = new MemberState('Románia', 19523621);
    static readonly SLOVENIA = new MemberState('Szlovénia', 2066880);
    static readonly SLOVAKIA = new MemberState('Szlovákia', 5443120);
    static readonly FINLAND = new MemberState('Finnország', 5513130);
    static readonly SWEDEN = new MemberState('Svédország', 10120242);
    static readonly UK = new MemberState('Egyesült Királyság', 66238007);

    static readonly memberStates: MemberState[] = [
        MemberState.BELGIUM,
        MemberState.BULGARIA,
        MemberState.CZECH_REPUBLIC,
        MemberState.DENMARK,
        MemberState.GERMANY,
        MemberState.ESTONIA,
        MemberState.IRELAND,
        MemberState.GREECE,
        MemberState.SPAIN,
        MemberState.FRANCE,
        MemberState.CROATIA,
        MemberState.ITALY,
        MemberState.CYPRUS,
        MemberState.LATVIA,
        MemberState.LITHUANIA,
        MemberState.LUXEMBOURG,
        MemberState.HUNGARY,
        MemberState.MALTA,
        MemberState.THE_NETHERLANDS,
        MemberState.AUSTRIA,
        MemberState.POLAND,
        MemberState.PORTUGAL,
        MemberState.ROMANIA,
        MemberState.SLOVENIA,
        MemberState.SLOVAKIA,
        MemberState.FINLAND,
        MemberState.SWEDEN,
        MemberState.UK
      ];

    name: string;
    population: number;

    constructor(name: string, population: number) {
        this.name = name;
        this.population = population;
    }
}
