import { DataGrid } from "@material-ui/data-grid";
import { Code, NoteAdd } from "@material-ui/icons";
import { makeStyles, createStyles } from "@material-ui/core";
import "./datagrid.css";
import axios from "axios";
import { useEffect, useState } from "react";

function Datagrid() {
  const [lists, changeList] = useState([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      const res = await axios.get("/question");
      // console.log(res.data);
      changeList(res.data);
      // lists = res.data;
    };
    // console.log(lists);
    fetchQuestions();
  }, []);
  const columns = [
    // {
    //   field: "number",
    //   headerName: "S NO.",
    //   width: 100,
    // },
    {
      field: "title",
      headerName: "Title",
      width: 350,
    },
    {
      field: "company",
      headerName: "Company",
      width: 350,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "difficulty",
      headerName: "Difficulty",
      width: 150,
    },
    {
      field: "solution",
      headerName: "Solution",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <a href={params.row.solution} target="_blank">
              <NoteAdd />
            </a>
          </>
        );
      },
    },
    {
      field: "link",
      headerName: "Solve Here",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <a href={params.row.link} target="_blank">
              <Code />
            </a>
          </>
        );
      },
    },
  ];

  const useStyles = makeStyles((theme) =>
    createStyles({
      root: {
        // '& div[data-rowIndex][role="row"]:nth-of-type(2n)': {
        //   color: "blue",
        // //   fontSize: 18,
        //   //risky sizing code starts here
        //   minHeight: "60px !important",
        //   height: 60,
        //   "& div": {
        //     minHeight: "60px !important",
        //     height: 60,
        //     lineHeight: "59px !important",
        //   },
        // },
        // '& div[data-rowIndex][role="row"]:nth-of-type(2n+1)': {
        //   color: "red",
        //   fontSize: 18,
        //   //risky sizing code starts here
        //   minHeight: "60px !important",
        //   height: 60,
        //   "& div": {
        //     minHeight: "60px !important",
        //     height: 60,
        //     lineHeight: "59px !important",
        //   },
        // },
        "& .MuiDataGrid-renderingZone": {
          "& .MuiDataGrid-row": {
            "&:nth-child(2n)": {
              backgroundColor: "rgba(235,235,235)",
            },
          },
        },
      },
    })
  );

  const classes = useStyles();
  // const lists = [
  //   {
  //     title: "Median of two sorted Arrays",
  //     company: "Amazon,google,microsoft",
  //     difficulty: "Hard",
  //     number: "1",
  //     solution:
  //       "https://leetcode.com/problems/longest-substring-without-repeating-characters/solution/",
  //     _id: 1,
  //   },
  //   {
  //     title: "Median of two sorted Arrays",
  //     company: "Amazon,google,microsoft",
  //     difficulty: "Hard",
  //     number: "1",
  //     solution:
  //       "https://leetcode.com/problems/longest-substring-without-repeating-characters/solution/",
  //     _id: 2,
  //   },
  //   {
  //     title: "Median of two sorted Arrays",
  //     company: "Amazon,google,microsoft",
  //     difficulty: "Hard",
  //     number: "1",
  //     solution:
  //       "https://leetcode.com/problems/longest-substring-without-repeating-characters/solution/",
  //     _id: 3,
  //   },
  //   {
  //     title: "Median of two sorted Arrays",
  //     company: "Amazon,google,microsoft",
  //     difficulty: "Hard",
  //     number: "1",
  //     solution:
  //       "https://leetcode.com/problems/longest-substring-without-repeating-characters/solution/",
  //     _id: 4,
  //   },
  //   {
  //     title: "Median of two sorted Arrays",
  //     company: "Amazon,google,microsoft",
  //     difficulty: "Hard",
  //     number: "1",
  //     solution:
  //       "https://leetcode.com/problems/longest-substring-without-repeating-characters/solution/",
  //     _id: 5,
  //   },
  //   {
  //     title: "Median of two sorted Arrays",
  //     company: "Amazon,google,microsoft",
  //     difficulty: "Hard",
  //     number: "1",
  //     solution:
  //       "https://leetcode.com/problems/longest-substring-without-repeating-characters/solution/",
  //     _id: 6,
  //   },
  //   {
  //     title: "Median of two sorted Arrays",
  //     company: "Amazon,google,microsoft",
  //     difficulty: "Hard",
  //     number: "1",
  //     solution:
  //       "https://leetcode.com/problems/longest-substring-without-repeating-characters/solution/",
  //     _id: 7,
  //   },
  // ];

  return (
    <div>
      <div style={{ height: "800px", width: "80%", margin: "0px auto" }}>
        <DataGrid
          className={classes.root}
          rows={lists}
          disableSelectionOnClick
          columns={columns}
          pageSize={6}
          rowsPerPageOptions={[6]}
          // checkboxSelection
          getRowId={(r) => r._id}
        />
      </div>
    </div>
  );
}

export default Datagrid;
