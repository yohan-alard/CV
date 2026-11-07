import { preview } from 'vite'
import puppeteer from 'puppeteer'

const server = await preview({ preview: { port: 4399, strictPort: true, open: false } })
const browser = await puppeteer.launch({ args: ['--no-sandbox'] })
try {
  const page = await browser.newPage()
  await page.goto('http://localhost:4399/#/print', { waitUntil: 'networkidle0' })
  await page.evaluate(() => document.fonts.ready)
  await page.pdf({
    path: 'dist/cv-yohan-alard.pdf',
    format: 'A4',
    printBackground: true,
    preferCSSPageSize: true,
  })
  console.log('PDF généré : dist/cv-yohan-alard.pdf')
} finally {
  await browser.close()
  server.httpServer.close()
}
