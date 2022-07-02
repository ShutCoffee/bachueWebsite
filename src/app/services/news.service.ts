import { Injectable } from '@angular/core';
import { News } from "../models/news.model";

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  news: News[] = [
    new News("Bachué unterstützt die Stiftung “La Viña” bei der Förderung der Schulbildung", "assets/news_Juni06.jpg", "Auch das Projekt “Madres Migrantes” in Quito, Ecuador, konnten wir im Frühjahr 2022 wieder mit einem Beitrag von 470 CHF unterstützen. Mit diesem Geld konnten verschiedene Dinge für die migrierten Frauen bezahlt werden, die Teil der Projekte der Stiftung sind. Unter anderem wurden den Müttern und ihren Familien medizinische Versorgung, ein wöchentliches Frühstück und Essenskörbe bereitgestellt. Die Stiftung “Casa Viña” macht äusserst hilfreiche Arbeit mit den Frauen und ebenso deren Kindern. Den Müttern wird Zugang zu gynäkologischen Untersuchungen gewährt und den Kindern schulische Unterstützung geboten.", "06. Juni 2022"),
    new News("Frauenarmut existiert auch in der Schweiz – Bachué hilft", "assets/casa_mantay.jpg", "Obwohl wir in der Schweiz im internationalen Vergleich auf ein gut funktionierendes Sozialsystem zurückgreifen können, sind viele Menschen – wie alleinstehende Mütter – nicht selten vor finanzielle Schwierigkeiten gestellt, insbesondere diese Frauen, die keinen Schweizerpass haben. Diese erhalten im Falle einer Scheidung keine Alimente der Väter und müssen grosse bürokratische Hürden in einer Fremdsprache überwinden. Obwohl das Sozialamt zwar finanzielle Unterstützung leistet (eine Frau mit einem Kind bekommt gemäss der schweizerischen Konferenz für Sozialhilfe monatlich etwa 1’540 CHF plus Kinderalimente), werden beispielsweise Ausbildungskosten nur in Ausnahmefällen übernommen. Dies wäre jedoch hilfreich, um einen Anreiz zu schaffen, dass sich die Frauen wieder aus ihrer Abhängigkeit vom Sozialamt lösen und auf ihren eigenen Beinen stehen können. Die Kombination von unzureichenden Hilfestellungen von Seiten des Staates und die gleichzeitig hohe Erwartung an Mütter sowie die gesellschaftliche Stigmatisierung als “Sozialschmarotzerin” führt oft zu einer hohen emotionalen Belastung. Glücklicherweise konnte der Verein Bachué in den letzten Wochen einigen Frauen aushelfen: An zwei Frauen wurden vier volle Kleidersäcke gespendet, dem Sohn einer anderen alleinstehenden Mutter wurde ein Fussballkurs (mit 200 CHF) finanziert und einer dritten der Lattenrost für ihr Bett (mit 199 CHF). Letztlich konnten wir Dank Euren Spenden einer Mutter ihre Ausbildung als Kosmetikerin teilfinanzieren. Sie hat die Ausbildung erfolgreich absolviert und ihr Diplom erhalten.", "23. Mai 2022"),
    new News("News Oktober/November", "assets/news_preview_picture.png", "Dank Euren Spenden konnten wir von Juni-August 2021 insgesamt 1500 CHF nach Kolumbien an die Fundación Sanctuary schicken. Mit 1’000 konnten weitere Computer für die Kinder und Jugendlichen gekauft werden, wodurch es ihnen möglich ist, einen besseren Zugang zu Bildung zu erlangen. Durch weitere 500 CHF wurden im August Kits für 80 Kinder mit Heften, Bleistiften und Büchern finanziert sowie Lebensmittelpakete für die Familien. ", "21. November 2021"),
    new News("News August/September", "assets/news_August09.jpg", "Die Heilpädagogin Aline Stöckli, Vorstandsmitglied von Bachué, unterstützt wöchentlich das Kind einer alleinstehenden Mutter in der Schweiz bei den schulischen Herausforderungen, die er momentan alleine nicht meistern kann (Lesen & Konzentration).", "9. August 2021"),
    new News("News Juni/Juli", "assets/casa_mantay.jpg", "Durch eine grosszügige Spende von 2’000 CHF kann der Jahreslohn einer Erzieherin (Betreuerin/Lehrerin), die jeweils am Wochenende im Casa Mantay arbeitet, finanziert werden. Die Betreuerin ist zuständig für die Organisation der Aktivitäten an den Wochenenden wie zum Beispiel für das Planen des Programms für die Mütter und Kinder, für das Essen und das Putzen sowie für die Koordination der externen Besuche. Sie verdient monatlich 750 Peruanischen Sol (Währung Perus), was umgerechnet rund 175 CHF entspricht. Zudem zahlt das Casa Mantay monatlich rund 84 Sol (rund 20 CHF) in ihre Sozialversicherung ein. Auch dies kann mit diesen 2’000 übernommen werden und deshalb sagen wir: Herzlichen Dank!", "1. August 2021")
  ]

  constructor() { }

  public getNews(): News[] {
    return this.news;
  }

  public getLatestNews(): News {
    return this.news[0]
  }
}
