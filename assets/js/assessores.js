// Matriz de Especialistas / Assessores do Gabinete (Skill-Based Routing)
export const ASSESSORES = [
  {
    id: 'carlos',
    nome: 'Carlos Eduardo',
    cargo: 'Assessor de Infraestrutura e Serviços Públicos',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
    filas: ['Infraestrutura', 'Iluminação Pública'],
    mensagem: 'Olá! Sou o Carlos Eduardo, assessor responsável por Infraestrutura e Iluminação no gabinete do Vereador Rinaldo. Vamos registrar sua demanda para cobrar os reparos da Prefeitura!'
  },
  {
    id: 'marina',
    nome: 'Dra. Marina Santos',
    cargo: 'Assessora de Saúde e Assistência Social',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80',
    filas: ['Saúde', 'Assistência Social'],
    mensagem: 'Olá! Sou a Dra. Marina, assessora técnica de Saúde e Assistência Social. Conte comigo para acolher e dar andamento ao seu pedido com a prioridade que você merece.'
  },
  {
    id: 'patricia',
    nome: 'Patrícia Alencar',
    cargo: 'Assessora de Educação e Mobilidade Urbana',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80',
    filas: ['Educação', 'Transporte e Mobilidade'],
    mensagem: 'Olá! Sou a Patrícia Alencar, assessora de Educação e Mobilidade. Estou aqui para entender suas sugestões e problemas no transporte ou escolas da nossa cidade.'
  },
  {
    id: 'andre',
    nome: 'André Silveira',
    cargo: 'Chefe de Gabinete e Ouvidoria Comunitária',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
    filas: ['Limpeza Urbana', 'Outros Assuntos'],
    mensagem: 'Olá! Sou o André Silveira, Chefe de Gabinete do Vereador Rinaldo. Cuidarei pessoalmente da triagem do seu assunto para formalizar o requerimento.'
  }
];

// Motor de Cruzamento / Roteamento Automático
export function obterAssessorPorFila(categoriaEscolhida) {
  return ASSESSORES.find(assessor => 
    assessor.filas.includes(categoriaEscolhida)
  ) || ASSESSORES[3]; // Fallback para Chefe de Gabinete
}
