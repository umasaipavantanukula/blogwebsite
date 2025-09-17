import { ImageResponse } from 'next/og'
 
// Route segment config
export const runtime = 'edge'
 
// Image metadata
export const alt = 'Blog Post'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'
 
// Image generation
export default async function Image({ params }) {
  try {
    return new ImageResponse(
      (
        // ImageResponse JSX element
        <div
          style={{
            fontSize: 64,
            background: 'linear-gradient(to bottom, #1e293b, #334155)',
            color: 'white',
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '40px 80px',
          }}
        >
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between',
            marginBottom: '40px' 
          }}>
            <div style={{ fontWeight: 'bold' }}>My Blog</div>
            <div style={{ 
              fontSize: 24, 
              backgroundColor: '#3b82f6',
              padding: '8px 16px',
              borderRadius: '8px'
            }}>#{params.slug}</div>
          </div>
          <div style={{ 
            fontSize: 48,
            lineHeight: 1.2,
            marginBottom: '20px'
          }}>
            Post about {params.slug}
          </div>
          <div style={{ 
            fontSize: 28,
            color: '#cbd5e1'
          }}>
            Read the full article on our website
          </div>
        </div>
      ),
      // ImageResponse options
      {
        ...size,
      }
    )
  } catch (e) {
    console.log(`Error generating image: ${e.message}`);
    return new Response(`Error generating image`, {
      status: 500,
    });
  }
}