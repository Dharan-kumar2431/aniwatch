import "./Animepaganation.css";
import { Pagination } from "react-bootstrap";

const Animepaganation = () => {
  return (
    <div>
      <Pagination className="paganationbtn">
      <Pagination.First className="d-lg-none d-md-none d-sm-none d-none"/>
      <Pagination.First />
      <Pagination.Prev />
      <Pagination.Item>{1}</Pagination.Item>
      <Pagination.Item>{2}</Pagination.Item>
      <Pagination.Item>{3}</Pagination.Item>
      <Pagination.Item>{4}</Pagination.Item>
      <Pagination.Item>{5}</Pagination.Item>
      <Pagination.Next />
      <Pagination.Last />
      <Pagination.Last className="d-lg-none d-md-none d-sm-none d-none"/>
    </Pagination>
    </div>
  );
};

export default Animepaganation;
