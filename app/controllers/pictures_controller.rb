class PicturesController < ApplicationController

  def show
    url = "https://api.instagram.com/v1/tags/#{params[:id]}/media/recent?access_token=417427825.1677ed0.d25bf87aa1334cbd93998af6f68b00e1"
    response = HTTParty.get(url)
    render :json => response.parsed_response
  end

end
