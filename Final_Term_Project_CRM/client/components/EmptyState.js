export default function EmptyState({ icon: Icon, title, message, action }) {
  return (
    <div className="empty-state">
      <span>{Icon && <Icon size={26} />}</span>
      <h3>{title}</h3>
      <p>{message}</p>
      {action}
    </div>
  );
}
