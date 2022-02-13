<?php

namespace App\Controller\Administration;

use App\Entity\Voiture;
use App\Repository\VoitureRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ExoQuatre extends  AbstractController
{


    #[Route('/exoQuatre', name: 'voiture_new', methods: ['GET', 'POST'])]
    public function new (): Response
    {

        $voitures = new Voiture();
        return $this->renderForm('voiture/new.html.twig', [
            'voiture' => $voitures,

        ]);
    }
}
