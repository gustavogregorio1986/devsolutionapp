// empresa.ts
export class Empresa {
    Id: string;
    NomeEmpresa: string;
    Cnpj: string;
    Setor: string;

    constructor(id: string, nomeEmpresa: string, cnpj: string, setor: string) {
        this.Id = id;
        this.NomeEmpresa = nomeEmpresa;
        this.Cnpj = cnpj;
        this.Setor = setor;
    }
}
