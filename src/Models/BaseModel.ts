export class BaseModel {
    public id: number;
    public name: string;
    public language: LanguageModel;

    public constructor(data?: IBase) {
        this.id = (data && data.id) || 0;
        this.name = (data && data.name) || "";
        this.language = (data && new LanguageModel(data.language)) || new LanguageModel();
    }

    public getDisplaylanguage(): string {
        return this.language ? this.language.displayName : "";
    }
}

export class LanguageModel {
    public displayName: string;

    public constructor (data?: ILanguageModel) {
        this.displayName = (data && data.displayName) || "";
    }
}
 
export interface IBase {    
    id : number;
    name : string;
    language : LanguageModel;
}

export interface ILanguageModel { 
    displayName : string;
}