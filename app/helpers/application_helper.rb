module ApplicationHelper
  # Returns the full title on a per-page basis.
  def full_title(page_title)
    base_title = 'Chaincase'
    if page_title.empty?
      base_title
    else
      "#{base_title} | #{page_title}"
    end
  end

  def default_meta_tags
    {
      site: 'chaincase.app',
      reverse: true,
      separator: '|',
      description: 'Sensible bitcoin privacy',
      keywords: 'bitcoin, private, payjoin',
      canonical: request.original_url,
      noindex: !Rails.env.production?,
      icon: [
        { href: "/favicon.svg", type: "image/svg+xml" },
      ],
      og: {
        site_name: :site,
        title: :title,
        description: :description, 
        type: 'website',
        url: request.original_url,
        image: image_url('lightning-striking-surveilled-bitcoins.jpg')
      },
      twitter: {
        site: :site,
        creator: '@chaincaseapp',
        card: 'summary_large_image',
      },
    }
  end
end
