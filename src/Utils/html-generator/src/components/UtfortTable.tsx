interface Task {
  Beskrivelse: string;
  Utført: boolean;
  Kommentar: string;
  Kategori: string;
}

interface TaskTableProps {
  tasks: Task[];
}

function UtfortTable({ tasks }: TaskTableProps) {
  return (
    <div>
      <table>
        <colgroup>
          <col style={{ width: "5%" }} />
          <col style={{ width: "45%" }} />
          <col style={{ width: "5%" }} />
          <col style={{ width: "45%" }} />
        </colgroup>
        <thead>
          <tr>
            <th>Punkt</th>
            <th>Oppgave</th>
            <th>Utført</th>
            <th>Kommentar</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <tr key={index}>
              <td>{task.Beskrivelse}</td>
              <td>{task.Kategori}</td>
              <td>
                {task.Utført ? (
                  <svg
                    width="14"
                    height="14"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    xmlSpace="preserve"
                    overflow="hidden"
                  >
                    <path
                      d="M6.99694 1.45833C3.93805 1.45833 1.45833 3.93805 1.45833 6.99694 1.45833 10.0558 3.93805 12.5355 6.99694 12.5355 10.0558 12.5355 12.5355 10.0558 12.5355 6.99694 12.5355 6.99679 12.5355 6.99665 12.5355 6.9965 12.5366 3.9389 10.0588 1.45938 7.00117 1.45833 6.99975 1.45833 6.99835 1.45833 6.99694 1.45833ZM8.3386 7.26148C7.53166 8.06696 6.71985 8.8796 5.90319 9.69938 5.20921 9.0021 4.51359 8.30648 3.81631 7.6125L4.51354 6.91527 5.90319 8.30492C6.57781 7.62056 7.24865 6.94104 7.91569 6.26631 8.58229 5.59169 8.9511 5.22958 9.6425 4.56137 9.66189 4.54198 9.68275 4.52273 9.70535 4.50304 9.72726 4.48446 9.74684 4.46332 9.76369 4.44004L10.4707 5.13727C9.6495 5.95394 9.1455 6.4556 8.33846 7.26104Z"
                      fill="#A9D18E"
                    />
                  </svg>
                ) : (
                  <svg
                    width="14"
                    height="14"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    xmlSpace="preserve"
                    overflow="hidden"
                  >
                    <path
                      d="M6.99781 1.45833C3.93884 1.45825 1.459 3.93797 1.45892 6.99694 1.45883 10.0559 3.93855 12.5357 6.99752 12.5358 10.0565 12.5359 12.5363 10.0562 12.5364 6.99723 12.5364 6.99704 12.5364 6.99683 12.5364 6.99665 12.5375 3.93905 10.0598 1.45946 7.00219 1.45833 7.00073 1.45833 6.99927 1.45833 6.99781 1.45833ZM9.4726 8.77465 8.77537 9.47187 6.99781 7.69402 5.22083 9.47158 4.5236 8.77435 6.3 6.99665 4.52287 5.21908 5.22083 4.52185 6.99781 6.3 8.77537 4.52185 9.4726 5.21908 7.69504 6.99665Z"
                      fill="#FF8585"
                    />
                  </svg>
                )}
              </td>
              <td>{task.Kommentar}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UtfortTable;