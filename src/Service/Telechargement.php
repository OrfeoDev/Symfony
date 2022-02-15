<?php

namespace App\Service;

use Symfony\Component\DependencyInjection\ContainerInterface;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Component\String\Slugger\SluggerInterface;

class Telechargement
{
    private $container;
    private $slugger;

    public function __construct(ContainerInterface $container,SluggerInterface $slugger)
    {
$this->container=$container;
$this->slugger=$slugger;
    }
// Ici on cree le service qui permettra de recuperer les fichier uploades
// Faire attention aux accents,parentheses
    public function deplacer(UploadedFile $uploadedFile)
    {
        $nomFichier=$this->slugger->slug($uploadedFile->getClientOriginalName());
        $uploadedFile->move($this->container->getParameter('upload_files'),$nomFichier);

        return $nomFichier;
    }
}
