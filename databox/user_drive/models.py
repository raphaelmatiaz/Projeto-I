from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Drive(models.Model):
    user = models.OneToOneField(
        User, 
        on_delete=models.CASCADE,
    )
    # files = models.ForeignKey('File', blank=True, null=True, default=None, on_delete=models.SET_DEFAULT)
    # folders = models.ForeignKey('Folder', blank=True, null=True, default=None, on_delete=models.SET_DEFAULT)

class Folder(models.Model):
    name = models.CharField(max_length=50, unique=True)  
    parent = models.ForeignKey('Folder', blank=True, null=True, on_delete=models.CASCADE)
    drive = models.ForeignKey(Drive, on_delete=models.CASCADE)


class File(models.Model):
    name = models.CharField(max_length=50)
    file = models.FileField(upload_to='files/')
    drive = models.ForeignKey('Drive', on_delete=models.CASCADE)



# NOTA em modelos de db vamos do elemento mais pequeno ao maior. A ForeignKey deve ser posta no elemento 'inferior' àquele ao qual o queremos conectar:

# Exemplo: uma escola tem váarios alunos    um aluno so pode estar em uma escola

            # class Escola(models.Model):
            #     aluno = models.OneToOneField('Aluno')


            # class Aluno(models.Model):
            #     escola = models.ForeignKey('Escola')


# Exemplo: uma equipa de futbol tem varios jogadores            um jogador so pode pertencer a uma equipa


            # class Equipa(models.Model):
            #     jogador = models.OneToOneField('Jogador')
    
            # class Jogador(models.Model):
            #     equipa = models.ForeignKey('Equipa')