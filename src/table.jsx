import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { mockedCalls } from "./data";
import { getCalls } from "./services";
import MissingAudio from "./media/sample.mp3";

// import Audio from './media/sample.mp3'

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function BasicTable() {
  const [calls, setCalls] = React.useState();

  React.useEffect(() => {
    getCalls
      .then(function (response) {
        setCalls(response);
        // handle success
        console.log('success calls',response);
      })
      .catch(function (error) {
        // handle error
        console.log('failure calls',error);
        setCalls(mockedCalls);
      })
      .finally(function () {
        // always executed
      });
  }, []);
  console.log("calls :>> ", calls);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>#SR</TableCell>
            <TableCell align="right">Company Name</TableCell>
            <TableCell align="right">RecruiterId</TableCell>
            <TableCell align="right">Job seeker</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">Keywords</TableCell>
            <TableCell align="right">Audio</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {calls?.map(({sno,company_name,recruiter_id,jobseeker_id,status,matching_words,file_name}) => (
            <TableRow
              key={sno}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="right">{sno}</TableCell>
              <TableCell component="th" scope="row">
                {company_name}
              </TableCell>
              <TableCell align="right">{recruiter_id}</TableCell>
              <TableCell align="right">{jobseeker_id}</TableCell>
              <TableCell align="right">{status?
            <span className="green">Genuine</span>  :
            <span className="red">Suspect</span>  
            }</TableCell>
              <TableCell align="right" title={matching_words.join(', ')}>{matching_words.join(', ')}</TableCell>
              {/* <TableCell align="right">{file_name}</TableCell> */}
              <TableCell align="right">
                {/* {protein} */}

                <audio controls>
                  <source src={file_name} type="audio/mpeg" />
                  
                </audio>
                
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
