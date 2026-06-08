// Sistema de Gerenciamento de Economia Agrícola

// 1. Dados da Produção
const producao = {
    cultura: "Soja",
    areaHectares: 50,
    produtividadePorHectare: 60, // em sacas
    precoPorSaca: 130.00 // em reais
};

// 2. Custos de Produção (por Hectare)
const custosPorHectare = {
    sementes: 400.00,
    fertilizantes: 1200.00,
    defensivos: 800.00,
    maoDeObra: 300.00,
    combustivel: 250.00
};

// 3. Função para calcular a saúde financeira da safra
function analisarEconomiaAgricola(prod, custos) {
    // Cálculos de produção total
    const totalSacas = prod.areaHectares * prod.produtividadePorHectare;
    const receitaTotal = totalSacas * prod.precoPorSaca;

    // Cálculos de custos
    const custoTotalPorHectare = Object.values(custos).reduce((acc, curr) => acc + curr, 0);
    const custoTotalPropriedade = custoTotalPorHectare * prod.areaHectares;

    // Resultado Financeiro
    const lucroLiquido = receitaTotal - custoTotalPropriedade;
    const margemLucro = (lucroLiquido / receitaTotal) * 100;

    // Retorno dos dados formatados
    return {
        cultura: prod.cultura,
        totalSacas: totalSacas,
        receitaTotal: receitaTotal,
        custoTotal: custoTotalPropriedade,
        lucroLiquido: lucroLiquido,
        margemLucro: margemLucro
    };
}

// 4. Executando a análise
const relatorioFinanceiro = analisarEconomiaAgricola(producao, custosPorHectare);