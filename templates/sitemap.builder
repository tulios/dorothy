xml.instruct!
xml.urlset "xmlns" => "http://www.sitemaps.org/schemas/sitemap/0.9" do
  
  ["/", "/about", "/archives"].each do |page|
    xml.url { xml.loc @config[:url] + "#{page}" }
  end
  
  @articles.each do |article|
    xml.url { xml.loc article.url }
  end
  
end