class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :title, :image, :description, :entries

  has_many :entries
end
