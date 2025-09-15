import { useEffect, useState } from 'react';
import SubTabCard from './SubTabCard';

const SubTabs = ({ currentSubtabs, openModal }) => {
  const subtabsData = {
    first: {
      title: 'Categorías de Derecho Laboral',
      color: 'blue',
      cards: [
        { title: 'Despidos y liquidaciones', icon: 'document', content: 'Despidos y liquidaciones' },
        { title: 'Contratos y expedientes laborales', icon: 'document', content: 'Contratos y expedientes laborales' },
        { title: 'Reglamento interior de trabajo', icon: 'document', content: 'Reglamento interior de trabajo' },
        { title: 'Desvinculaciones y finiquitos', icon: 'document', content: 'Desvinculaciones y finiquitos' },
        { title: 'Juicios y procedimientos de desvinculación laboral', icon: 'document', content: 'Juicios y procedimientos de desvinculación laboral' },
        { title: 'Comparecencia a citas conciliatorias y audiencias en juicio', icon: 'document', content: 'Comparecencia a citas conciliatorias y audiencias en juicio' },
        { title: 'Contratos de confidencialidad y no competencia', icon: 'document', content: 'Contratos de confidencialidad y no competencia' },
        { title: 'Protocolización completa de su fuente de trabajo', icon: 'document', content: 'Protocolización completa de su fuente de trabajo' }
      ]
    },
    second: {
      title: 'Categorías Casos de Seguridad Social y Afore',
      color: 'blue',
      cards: [
        { title: 'Declaración de beneficiario: concubina', icon: 'document', content: 'Declaración de beneficiario: concubina' },
        { title: 'Declaración de beneficiario: hijos', icon: 'document', content: 'Declaración de beneficiario: hijos' },
        { title: 'Declaración de beneficiario: padres', icon: 'document', content: 'Declaración de beneficiario: padres' },
        { title: 'Recuperación de subcuenta de Afore', icon: 'document', content: 'Recuperación de subcuenta de Afore' },
        { title: 'Declaración de concubinato laboral', icon: 'document', content: 'Declaración de concubinato laboral' },
        { title: 'Pensión por viudez (esposo)', icon: 'document', content: 'Pensión por viudez (esposo)' },
        { title: 'Riesgos de trabajo', icon: 'document', content: 'Riesgos de trabajo' },
        { title: 'Pensión por riesgo de trabajo', icon: 'document', content: 'Pensión por riesgo de trabajo' },
        { title: 'Recuperación de casa por fallecimiento ante Infonavit', icon: 'document', content: 'Recuperación de casa por fallecimiento ante Infonavit' }
      ]
    },
    third: {
      title: 'Categorías de Compliance',
      color: 'blue',
      cards: [
        { title: 'Protocolización completa en derecho laboral', icon: 'document', content: 'Protocolización completa en derecho laboral' },
        { title: 'Consultoría legal', icon: 'document', content: 'Consultoría legal' },
        { title: 'Auditoría legal de cumplimiento de la empresa', icon: 'document', content: 'Auditoría legal de cumplimiento de la empresa' },
        { title: 'Creación de políticas y procedimientos', icon: 'document', content: 'Creación de políticas y procedimientos' },
        { title: 'Contraloría de acciones internas de la empresa', icon: 'document', content: 'Contraloría de acciones internas de la empresa' },
        { title: 'Cumplimiento normativo de las leyes y reglamentos del IMSS, STPS e Infonavit', icon: 'document', content: 'Cumplimiento normativo de las leyes y reglamentos del IMSS, STPS e Infonavit' }
      ]
    },
    fourth: {
      title: 'Categorías de Derecho Administrativo y Constitucional',
      color: 'blue',
      cards: [
        { title: 'Amparo directo', icon: 'document', content: 'Amparo directo' },
        { title: 'Amparo indirecto', icon: 'document', content: 'Amparo indirecto' },
        { title: 'Juicio de nulidad y multas', icon: 'document', content: 'Juicio de nulidad y multas' },
        { title: 'Recurso de queja y revisión', icon: 'document', content: 'Recurso de queja y revisión' },
        { title: 'Queja ante Profeco', icon: 'document', content: 'Queja ante Profeco' },
        { title: 'Queja ante Condusef', icon: 'document', content: 'Queja ante Condusef' }
      ]
    },
    fifth: {
      title: 'Categorías de Derecho Familiar',
      color: 'blue',
      cards: [
        { title: 'Divorcio', icon: 'document', content: 'Divorcio' },
        { title: 'Pensión alimenticia', icon: 'document', content: 'Pensión alimenticia' },
        { title: 'Juicio sucesorio testamentario', icon: 'document', content: 'Juicio sucesorio testamentario' },
        { title: 'Juicio sucesorio intestamentario', icon: 'document', content: 'Juicio sucesorio intestamentario' },
        { title: 'Adopciones', icon: 'document', content: 'Adopciones' },
        { title: 'Concubinato', icon: 'document', content: 'Concubinato' },
        { title: 'Juicio de interdicción', icon: 'document', content: 'Juicio de interdicción' },
        { title: 'Juicio de corrección de actas', icon: 'document', content: 'Juicio de corrección de actas' }
      ]
    },
    sixth: {
      title: 'Categorías de Derecho Civil',
      color: 'blue',
      cards: [
        { title: 'Desalojo y pago de rentas', icon: 'document', content: 'Desalojo y pago de rentas' },
        { title: 'Cumplimiento de contratos y cláusulas penales', icon: 'document', content: 'Cumplimiento de contratos y cláusulas penales' },
        { title: 'Juicio de responsabilidad civil y daños', icon: 'document', content: 'Juicio de responsabilidad civil y daños' },
        { title: 'Juicio por daño moral y daños punitivos', icon: 'document', content: 'Juicio por daño moral y daños punitivos' },
        { title: 'Juicio de formalización de compraventa de inmuebles', icon: 'document', content: 'Juicio de formalización de compraventa de inmuebles' },
        { title: 'Diligencias de notificación', icon: 'document', content: 'Diligencias de notificación' },
        { title: 'Juicios hipotecarios', icon: 'document', content: 'Juicios hipotecarios' },
        { title: 'Juicios de apeo y deslinde', icon: 'document', content: 'Juicios de apeo y deslinde' }
      ]
    },
    seventh: {
      title: 'Categorías de Contratos',
      color: 'blue',
      cards: [
        { title: 'Contrato de arrendamiento', icon: 'document', content: 'Contrato de arrendamiento' },
        { title: 'Contrato de prestación de servicios', icon: 'document', content: 'Contrato de prestación de servicios' },
        { title: 'Contrato de compraventa', icon: 'document', content: 'Contrato de compraventa' },
        { title: 'Contrato de compraventa de bienes inmuebles', icon: 'document', content: 'Contrato de compraventa de bienes inmuebles' },
        { title: 'Contrato de permuta', icon: 'document', content: 'Contrato de permuta' },
        { title: 'Contrato REPSE', icon: 'document', content: 'Contrato REPSE' },
        { title: 'Contratos colectivos de trabajo', icon: 'document', content: 'Contratos colectivos de trabajo' },
        { title: 'Convenios civiles', icon: 'document', content: 'Convenios civiles' }
      ]
    },
    eigth: {
      title: 'Categorías de Derecho Societario',
      color: 'blue',
      cards: [
        { title: 'Asesoría y gestión para constitución de sociedades', icon: 'document', content: 'Asesoría y gestión para constitución de sociedades' },
        { title: 'Políticas para una debida cobranza extrajudicial', icon: 'document', content: 'Políticas para una debida cobranza extrajudicial' },
        { title: 'Contratos de compraventa de acciones', icon: 'document', content: 'Contratos de compraventa de acciones' },
        { title: 'Títulos accionarios y libros corporativos', icon: 'document', content: 'Títulos accionarios y libros corporativos' },
        { title: 'Orden del día de asambleas ordinarias y extraordinarias', icon: 'document', content: 'Orden del día de asambleas ordinarias y extraordinarias' },
        { title: 'Trámites y juicios en su representación', icon: 'document', content: 'Trámites y juicios en su representación' }
      ]
    }
  };

 
  
  if (!currentSubtabs || !subtabsData[currentSubtabs]) return null;
  const currentData = subtabsData[currentSubtabs];

  return (
    <div className="subtabs-container mb-8">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">{currentData.title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {currentData.cards.map((card, index) => (
          <SubTabCard
            key={index}
            {...card}
            color={currentData.color}
            delay={index * 100}
            onClick={() => openModal(card.title, card.content)}
          />
        ))}
      </div>
    </div>
  );
};

export default SubTabs;
