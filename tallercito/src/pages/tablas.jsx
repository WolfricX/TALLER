import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NavBar from '../components/navbar';
import AgregarDatosModal from '../components/modal';
import './CSS/styles.css';

function Tablas() {
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:3000/Taller');
      setData(response.data);
    } catch (error) {
      console.error('Error al obtener datos de la API', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:3000/Taller/${id}`);

      if (response.status === 200) {
        alert('Se borró correctamente');
      } else {
        alert('Sucedió un error');
      }

      fetchUsers();
    } catch (error) {
      console.error('Error al eliminar datos de la API', error);
    }
  };

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleAgregarDatos = (nuevosDatos) => {
    // Implementa la lógica para agregar los nuevos datos a tu API
    // Luego cierra la ventana modal
    fetchUsers();
    handleCloseModal();
  };

  return (
    <div>
      <NavBar onOpenModal={handleOpenModal} />
      <button className="open-modal-button" onClick={handleOpenModal}>
        Agregar Nuevo Dato
      </button>
      {showModal && (
        <AgregarDatosModal onClose={handleCloseModal} onAgregarDatos={handleAgregarDatos} />
      )}
      <table className="my-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Tiempo</th>
            <th>Cliente</th>
            <th>Servicio</th>
            <th>Empleado</th>
            <th>Costo</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <th scope="row">{item.id}</th>
              <td>{item.tiempo}</td>
              <td>{item.Cliente}</td>
              <td>{item.servicio}</td>
              <td>{item.empleado}</td>
              <td>{item.costo}</td>
              <td>{item.estatus}</td>
              <td>
                <a className="edit-link">Editar</a>
                {"    "}
                <a className="delete-link" onClick={() => handleDelete(item.id)}>
                  Eliminar
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Tablas;
