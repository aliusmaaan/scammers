import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
const MissingAudio = require("./media/sample.mp3");
// import Audio from './media/sample.mp3'

function createData(
  name,
  calories,
  fat,
  carbs,
  protein,
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">
                {/* {row.protein} */}
              <audio controls>
  {/* <source src="https://infoedge-my.sharepoint.com/personal/akash_s3_infoedge_com/_layouts/15/stream.aspx?id=%2Fpersonal%2Fakash%5Fs3%5Finfoedge%5Fcom%2FDocuments%2FMicrosoft%20Teams%20Chat%20Files%2FCall%20recording%20Vaibhav%20Raj%20%2D%20InfoEdge%5F231006%5F105105%2Em4a&referrer=Teams%2ETEAMS%2DWEB&referrerScenario=p2p%5Fns%2Dbim&ga=1" type="audio/m4a" /> */}
  {/* <source src="./media/sample.mp3" type="audio/mpeg" /> */}
  {/* <source src="file:///home/fa064130/Git/my-app/src/media/sample.mp3" type="audio/mpeg" /> */}
  {/* <source src="https://samplelib.com/lib/preview/mp3/sample-3s.mp3" type="audio/mpeg" /> */}
  {/* <source src="/home/fa064130/Git/my-app/media" type="audio/mpeg" /> */}
  {/* Your browser does not support the audio element. */}
</audio>
<audio controls>
  {/* <source src="https://infoedge-my.sharepoint.com/personal/akash_s3_infoedge_com/_layouts/15/stream.aspx?id=%2Fpersonal%2Fakash%5Fs3%5Finfoedge%5Fcom%2FDocuments%2FMicrosoft%20Teams%20Chat%20Files%2FCall%20recording%20Vaibhav%20Raj%20%2D%20InfoEdge%5F231006%5F105105%2Em4a&referrer=Teams%2ETEAMS%2DWEB&referrerScenario=p2p%5Fns%2Dbim&ga=1" type="audio/m4a" /> */}
  <source src={MissingAudio.default} type="audio/mpeg" />
  {/* <source src="/home/fa064130/Git/my-app/media" type="audio/mpeg" /> */}
  {/* Your browser does not support the audio element. */}
</audio>
              {/* <audio src='https://infoedge-my.sharepoint.com/personal/akash_s3_infoedge_com/_layouts/15/stream.aspx?id=%2Fpersonal%2Fakash%5Fs3%5Finfoedge%5Fcom%2FDocuments%2FMicrosoft%20Teams%20Chat%20Files%2FCall%20recording%20Vaibhav%20Raj%20%2D%20InfoEdge%5F231006%5F105105%2Em4a&referrer=Teams%2ETEAMS%2DWEB&referrerScenario=p2p%5Fns%2Dbim&ga=1' /> */}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}