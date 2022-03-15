<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ComposantClassController extends AbstractController
{
    #[Route('/composantclass', name: 'composant_class')]
    public function index(): Response
    {
        return $this->render('composant_class/index.html.twig', [
            'controller_name' => 'ComposantClassController',
        ]);
    }
}
