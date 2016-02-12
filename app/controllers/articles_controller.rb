class ArticlesController < ApplicationController
  def index
    @articles = Article.all
  end

  def new
    @article = Article.new
  end

  def create
    @article = Article.find(params[:id])
    @article.create(params_article)
    redirect_to :show
  end

  def show
    @article = Article.find(params[:id])
  end

  def edit
    @article = Article.find(params[:id])
  end

  def update
    @article = Article.find(params[:id])
    @article.update
    redirect_to :show
  end

  def delete
    @article = Article.find(params[:id])
    @article.delete
    redirect_to :index
  end

  private
    def find_param
      @article = Article.find(params[:id])  
    end
    def params_article
      
    end
end
