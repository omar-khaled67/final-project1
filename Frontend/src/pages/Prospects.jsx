
import { FaTrash } from "react-icons/fa";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useState } from "react";


const Prospects = () => {
  const [Prospects, setProspects] = useState([]);

  useState(() => {
    const getAllProspects = async () => {
      try {
        const res = await publicRequest.get("/Prospects");
        setProspects(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getAllProspects();
  }, []);

  const handleDelete = async (id) => {
    try {
      await publicRequest.delete(`/Prospects/${id}`);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };


  const columns = [
    { field: "_id", headerName: "ID", width: 90 },
    { field: "name", headerName: "Name", width: 90 },
    { field: "email", headerName: "Email", width: 150 },
    { field: "address", headerName: "Address", width: 150 },
    { field: "bloodgroup", headerName: "BloodType", width: 130 },
    { field: "diseases", headerName: "Diseases", width: 150 },
    {
      field: "edit",
      headerName: "Approve",
      width: 100,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/admin/prospect/${params.row.id}`}>
              <button className="bg-gray-400 text-white cursor-pointer w-[70px]">
                Approve
              </button>
            </Link>
          </>
        );
      },
    },
    {
      field: "delete",
      headerName: "Delete",
      width: 100,
      renderCell: (params) => {
        return (
          <>
            <FaTrash
              className="text-red-500 cursor-pointer m-2"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];
  const rows = [
    {
      id: 0,
      name: "Laura Moser",
      address: "Down Town",
      bloodType: "B-",
      disease: "None",
    }
  ];

  return (
    <div className="w-[70vw]">
      <div className="flex items-center justify-between m-[30px]">
        <h1 className="m-[20px] text-[20px]">All Prospects</h1>


      </div>
      <div className="mx-[30px]">
        <DataGrid
          columns={columns}
          checkboxSelection
          getRowId={(row) => row.id}
          rows={rows}
        />
        ;
      </div>
    </div>
  );
};

export default Prospects;
