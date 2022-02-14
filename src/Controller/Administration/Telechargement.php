<?php

namespace App\Controller\Administration;

use Symfony\Component\DependencyInjection\ContainerInterface;
use Symfony\Component\HttpFoundation\File\UploadedFile;

class Telechargement
{
    public function __construct(ContainerInterface $container)
    {

    }
// Ici on creer le service qui permettra de recuperer les fichier uploades
// Faire attention aux accents,parentheses
    public function deplacer(UploadedFile $uploadedFile)
    {
        $uploadedFile->move($this->getParamater('upload_files'),
            $uploadedFile->getClientOriginalName());
    }
}
