import { LeaderType, Leader } from './leader.model';
import { PoliticalGroup } from './political-group.model';

export class MemberState {

    static readonly AUSTRIA = new MemberState('Ausztria', 8822267,
        new Leader('Brigitte Bierlein', PoliticalGroup.INDEPENDENT, LeaderType.HEAD_OF_GOVERNMENT)
    );
    static readonly BELGIUM = new MemberState('Belgium', 11413058,
        new Leader('Charles Michel', PoliticalGroup.RENEW_EUROPE, LeaderType.HEAD_OF_GOVERNMENT)
    );
    static readonly BULGARIA = new MemberState('Bulgária', 7050034,
        new Leader('Bojko Boriszov', PoliticalGroup.EPP, LeaderType.HEAD_OF_GOVERNMENT)
    );
    static readonly CZECH_REPUBLIC = new MemberState('Csehország', 10610055,
        new Leader('Andrej Babiš', PoliticalGroup.RENEW_EUROPE, LeaderType.HEAD_OF_GOVERNMENT)
    );
    static readonly DENMARK = new MemberState('Dánia', 5781190,
        new Leader('Lars Løkke Rasmussen', PoliticalGroup.RENEW_EUROPE, LeaderType.HEAD_OF_GOVERNMENT)
    );
    static readonly GERMANY = new MemberState('Németország', 82850000,
        new Leader('Angela Merkel', PoliticalGroup.EPP, LeaderType.HEAD_OF_GOVERNMENT)
    );
    static readonly ESTONIA = new MemberState('Észtország', 1319133,
        new Leader('Jüri Ratas', PoliticalGroup.RENEW_EUROPE, LeaderType.HEAD_OF_GOVERNMENT)
    );
    static readonly IRELAND = new MemberState('Írország', 4838259,
        new Leader('Leo Varadkar', PoliticalGroup.EPP, LeaderType.HEAD_OF_GOVERNMENT)
    );
    static readonly GREECE = new MemberState('Görögország', 10738868,
        new Leader('Alekszisz Ciprasz', PoliticalGroup.GUE_NGL, LeaderType.HEAD_OF_GOVERNMENT)
    );
    static readonly SPAIN = new MemberState('Spanyolország', 46659302,
        new Leader('Pedro Sánchez', PoliticalGroup.SD, LeaderType.HEAD_OF_GOVERNMENT)
    );
    static readonly FRANCE = new MemberState('Franciaország', 67221943,
        new Leader('Emmanuel Macron', PoliticalGroup.RENEW_EUROPE, LeaderType.HEAD_OF_STATE)
    );
    static readonly CROATIA = new MemberState('Horvátország', 4105493,
        new Leader('Andrej Plenković', PoliticalGroup.EPP, LeaderType.HEAD_OF_GOVERNMENT)
    );
    static readonly ITALY = new MemberState('Olaszország', 60483973,
        new Leader('Giuseppe Conte', PoliticalGroup.INDEPENDENT, LeaderType.HEAD_OF_GOVERNMENT)
    );
    static readonly CYPRUS = new MemberState('Ciprus', 864236,
        new Leader('Nikosz Anasztasziadisz', PoliticalGroup.EPP, LeaderType.HEAD_OF_STATE)
    );
    static readonly LATVIA = new MemberState('Lettország', 1934379,
        new Leader('Krišjānis Kariņš', PoliticalGroup.EPP, LeaderType.HEAD_OF_GOVERNMENT)
    );
    static readonly LITHUANIA = new MemberState('Litvánia', 2808901,
        new Leader('Dalia Grybauskaitė', PoliticalGroup.INDEPENDENT, LeaderType.HEAD_OF_STATE)
    );
    static readonly LUXEMBOURG = new MemberState('Luxemburg', 602005,
        new Leader('Xavier Bettel', PoliticalGroup.RENEW_EUROPE, LeaderType.HEAD_OF_GOVERNMENT)
    );
    static readonly HUNGARY = new MemberState('Magyarország', 9778371,
        new Leader('Orbán Viktor', PoliticalGroup.EPP, LeaderType.HEAD_OF_GOVERNMENT)
    );
    static readonly MALTA = new MemberState('Málta', 475701,
        new Leader('Joseph Muscat', PoliticalGroup.SD, LeaderType.HEAD_OF_GOVERNMENT)
    );
    static readonly THE_NETHERLANDS = new MemberState('Hollandia', 17181084,
        new Leader('Mark Rutte', PoliticalGroup.RENEW_EUROPE, LeaderType.HEAD_OF_GOVERNMENT)
    );
    static readonly POLAND = new MemberState('Lengyelország', 37976687,
        new Leader('Mateusz Morawiecki', PoliticalGroup.ECR, LeaderType.HEAD_OF_GOVERNMENT)
    );
    static readonly PORTUGAL = new MemberState('Portugália', 10291027,
        new Leader('António Costa', PoliticalGroup.SD, LeaderType.HEAD_OF_GOVERNMENT)
    );
    static readonly ROMANIA = new MemberState('Románia', 19523621,
        new Leader('Klaus Iohannis', PoliticalGroup.EPP, LeaderType.HEAD_OF_STATE)
    );
    static readonly SLOVENIA = new MemberState('Szlovénia', 2066880,
        new Leader('Marjan Šarec', PoliticalGroup.RENEW_EUROPE, LeaderType.HEAD_OF_GOVERNMENT)
    );
    static readonly SLOVAKIA = new MemberState('Szlovákia', 5443120,
        new Leader('Peter Pellegrini', PoliticalGroup.SD, LeaderType.HEAD_OF_GOVERNMENT)
    );
    static readonly FINLAND = new MemberState('Finnország', 5513130,
        new Leader('Antti Rinne', PoliticalGroup.SD, LeaderType.HEAD_OF_GOVERNMENT)
    );
    static readonly SWEDEN = new MemberState('Svédország', 10120242,
        new Leader('Stefan Löfven', PoliticalGroup.SD, LeaderType.HEAD_OF_GOVERNMENT)
    );
    static readonly UK = new MemberState('Egyesült Királyság', 66238007,
        new Leader('Theresa May', PoliticalGroup.ECR, LeaderType.HEAD_OF_GOVERNMENT)
    );

    static readonly memberStates: MemberState[] = [
        MemberState.AUSTRIA,
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
    leader: Leader;

    constructor(name: string, population: number, leader: Leader) {
        this.name = name;
        this.population = population;
        this.leader = leader;
    }
}
