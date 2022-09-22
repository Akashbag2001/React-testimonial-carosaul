import { Avatar } from "@material-ui/core";

const Card2 = ({ img }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
        color: "gray",
      }}
    >
      <Avatar
        imgProps={{ style: { borderRadius: "50%" } }}
        src={img}
        style={{
          width: 120,
          height: 120,
          padding: 7,
          marginBottom: 20,
        }}
      />
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis optio
        est, magnam corporis hic dolor blanditiis facere fugiat laudantium
        laborum id laboriosam qui recusandae modi cum quis repellat labore
        debitis.
      </p>
      <p style={{ fontStyle: "italic", marginTop: 25 }}>
        <span style={{ fontWeight: 500, color: "green" }}>Corbin</span> ,
        Software Developer at Amazon
      </p>
    </div>
  );
};
export default Card2;
