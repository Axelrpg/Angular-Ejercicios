export interface UnknownResponse {
    page:        number;
    per_page:    number;
    total:       number;
    total_pages: number;
    data:        Unknown[];
    support:     Support;
}

export interface Unknown {
    id:            number;
    name:          string;
    year:          number;
    color:         string;
    pantone_value: string;
}

export interface Support {
    url:  string;
    text: string;
}
