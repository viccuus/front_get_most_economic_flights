export class Flight {
    private _airline: string
    private _placeFrom: string
    private _placeTo: string
    private _flightDuration: string
    private _price: string
    constructor(airline: string, placeFrom: string, placeTo: string, flightDuration: string, price: string){
        this._airline = airline
        this._placeFrom	= placeFrom
        this._placeTo = placeTo
        this._flightDuration = flightDuration
        this._price = price
    }
    public get airline(): string {
        return this._airline
    }
    public set airline(value: string) {
        this._airline = value
    }
    public get placeFrom(): string {
        return this._placeFrom
    }
    public set placeFrom(value: string) {
        this._placeFrom = value
    }
    public get placeTo(): string {
        return this._placeTo
    }
    public set placeTo(value: string) {
        this._placeTo = value
    }
    public get flightDuration(): string {
        return this._flightDuration
    }
    public set flightDuration(value: string) {
        this._flightDuration = value
    }
    public get price(): string {
        return this._price
    }
    public set price(value: string) {
        this._price = value
    }
}
