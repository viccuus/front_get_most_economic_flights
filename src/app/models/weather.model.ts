export class Weather {
    private _dt: Date
    private _description: string
    private _temp: number
    private _humidity: string

    constructor(dt: string, description: string, temp: number, humidity: number) {
        this._dt = new Date(Number(dt)*1000)
        this._description = description
        this._temp = Number((temp-273.15).toFixed(2))
        this._humidity = humidity + "%"
    }
    public get dt(): Date {
        return this._dt
    }
    public set dt(value: Date) {
        this._dt = value
    }
    public get description(): string {
        return this._description
    }
    public set description(value: string) {
        this._description = value
    }
    public get temp(): number {
        return this._temp
    }
    public set temp(value: number) {
        this._temp = Number((value-273.15).toFixed(2))
    }
    public get humidity(): string {
        return this._humidity
    }
    public set humidity(value: string) {
        this._humidity = value
    }
}

