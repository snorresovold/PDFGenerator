interface FollowUp {
    oppfølging: string;
    jaNei: string;
    kommentar: string;
}

interface FollowUpTable {
  followUps: FollowUp[];
}

function OppfolgingsTable(props: FollowUpTable) {
  return (
    <div>
      <table>
        <colgroup>
          <col span={1} style={{ width: '47.5%' }} />
          <col span={1} style={{ width: '5%' }} />
          <col span={1} style={{ width: '47.5%' }} />
        </colgroup>
        <thead>
          <tr>
            <th>Oppfølging</th>
            <th>Ja/Nei</th>
            <th>Kommentar</th>
          </tr>
        </thead>
        <tbody>
          {props.followUps.map((followUp, index) => (
            <tr key={index}>
              <td>{followUp.oppfølging}</td>
              <td>{followUp.jaNei}</td>
              <td>{followUp.kommentar}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
  
export default OppfolgingsTable