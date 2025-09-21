interface Props {
  score: number;
}

const RiskBadge = ({ score }: Props) => {
  const nivel =
    score >= 0.8 ? 'Alto' :
    score >= 0.5 ? 'Medio' : 'Bajo';

  const color =
    score >= 0.8 ? 'bg-red-500' :
    score >= 0.5 ? 'bg-yellow-500' : 'bg-green-500';

  return (
    <span className={`text-white px-3 py-1 rounded ${color}`}>
      Riesgo: {nivel} ({(score * 100).toFixed(0)}%)
    </span>
  );
};

export default RiskBadge;
