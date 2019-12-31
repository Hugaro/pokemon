export class Route {
    public generation: string;
    public region: string;
    public locationUrl: string;
    public areaUrl: string;
    public pokemon: string;
    public berriesUrl: string;
    public machinesUrl: string;
    public abilitiesUrl: string;
    public movesUrl: string;
    public typesUrl: string;
    public statsUrl: string;

    public pageSize: string;
    public offset: string;

    constructor(obj: any) {
        this.pageSize = obj['page_size'];
        this.offset =  obj['offset'];

        this.generation = obj['url']['generation'];
        this.region = obj['url']['region'];
        this.pokemon = obj['url']['pokemon'];
        this.locationUrl = obj['url']['location'] + '/?limit=' +  this.pageSize + '&offset=' + this.offset;
        this.areaUrl = obj['url']['area'] + '/?limit=' +  this.pageSize + '&offset=' + this.offset;
        this.berriesUrl = obj['url']['berry'] + '/?limit=' + this.pageSize + '&offset=' + this.offset;
        this.machinesUrl = obj['url']['machine'] + '/?limit=' + this.pageSize + '&offset=' + this.offset;
        this.abilitiesUrl = obj['url']['ability'] + '/?limit=' + this.pageSize + '&offset=' + this.offset;
        this.movesUrl = obj['url']['move'] + '/?limit=' + this.pageSize + '&offset=' + this.offset;
        this.typesUrl = obj['url']['type'] + '/?limit=' + this.pageSize + '&offset=' + this.offset;
        this.statsUrl =  obj['url']['stat'] + '/?limit=' + this.pageSize + '&offset=' + this.offset;
    }

    public getUrlPage(urlBase: string): string {
        return urlBase + '/?limit=' +  this.pageSize + '&offset=' + this.offset;
    }

    public getUrlName(urlBase: string, name: string): string {
        return urlBase + '/' +  name;
    }
}
