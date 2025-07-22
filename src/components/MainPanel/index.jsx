import Footer from "../Footer";

function MainPanel({ children }) {
  return (
<>
    <div className="main-panel">
      <div className="content">
        {children}

      </div>
      <Footer />
    </div>
    
    </>
  );
}

export default MainPanel;