class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :title, :image, :tag, :description, :entries

  has_many :entries
end
