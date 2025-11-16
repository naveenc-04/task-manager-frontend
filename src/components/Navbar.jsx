
const Navbar = () => {
  return (
    <nav style={{
      width: "100%",
      padding: "15px 20px",
      background: "#ffffff",
      borderBottom: "1px solid #ddd",
      position: "sticky",
      top: 0,
      zIndex: 10
    }}>
      <h2 style={{ margin: 0, color: "#333", textAlign: "center", fontWeight: "600" }}>
        Task Manager
      </h2>
    </nav>
  );
};

export default Navbar;
