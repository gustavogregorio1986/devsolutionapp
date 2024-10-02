// empresa.ts
export class Empresa {
    Id: string;
    NomeEmpresa: string;
    Cnpj: string;
    EnumSituacao: string;
    Setor: string;

    constructor(id: string, nomeEmpresa: string, cnpj: string, EnumSituacao: string, setor: string) {
        this.Id = id;
        this.NomeEmpresa = nomeEmpresa;
        this.Cnpj = cnpj;
        this.EnumSituacao = EnumSituacao;
        this.Setor = setor;
    }
}
