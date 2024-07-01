import { SmileOutlined } from '@ant-design/icons';

function Footer() {
  return (
    <div style={{
      backgroundColor: '#001529',
      color: '#fff',
      height: '80px',
      display: 'grid',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '1rem',
    }}>
      <p>
        HIMEDIA <SmileOutlined />
      </p>
    </div>
  );
}

export default Footer;
