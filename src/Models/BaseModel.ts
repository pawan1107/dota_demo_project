export class BaseModel {
    public id: number;
    public name: string;
    public language: LanguageModel;

    public constructor(id: number, name: string, language: LanguageModel) {
        this.id = id;
        this.name = name;
        this.language = language;
    }

    public getDisplaylanguage(): string {
        return this.language?.displayName;
    }
}

class LanguageModel {
    public displayName: string;

    public constructor (displayName: string) {
        this.displayName = displayName;
    }
}
 