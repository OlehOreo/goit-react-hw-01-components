import styles from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
  return (
    <div className={styles.tableContainer}>
      <table className={styles.transactionHistory}>
        <thead>
          <tr className={styles.tableHeading}>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody>
          {items.map(({ id, type, amount, currency }) => (
            <tr key={id} className={styles.tableRow}>
              <td>{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
